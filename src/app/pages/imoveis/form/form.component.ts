import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PersistDataService } from "src/app/shared/service/persist-data.service";

import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit{
  titulo: string = "Dados do imóvel";
  imoveisForm: FormGroup;
  imoveis;
  parcelas: string = "";
  valorTotal: string = "";
  validarNumeroParcelas: boolean = false;
  taxaAoAno: number = 0.08;

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandSeparator: " ",
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ",",
    prefix: "R$ ",
  };

  constructor(
    private fb: FormBuilder,
    private persistDataService: PersistDataService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit(): void {
      
  }
  createForm() {
    this.persistDataService.imoveis.subscribe(
      (imoveis) => (this.imoveis = imoveis)
    );
    this.persistDataService.parcelas.subscribe(
      (parcelas) => (this.parcelas = parcelas)
    );
    this.persistDataService.valorTotal.subscribe(
      (valorTotal) => (this.valorTotal = valorTotal)
    );

    this.imoveisForm = this.fb.group({
      tipoImoveis: ["", Validators.required],
      renda: ["", Validators.required],
      imoveis: ["", Validators.required],
      valorEntrada: ["", [Validators.required]],
      parcelas: [null, Validators.required],
    });
  }

  validarNumero(event) {
    let NumeroParcelas = this.imoveisForm.controls["parcelas"].value;
    if (NumeroParcelas > 360) {
      this.validarNumeroParcelas = true;
    } else {
      this.validarNumeroParcelas = false;
    }
  }

  totalAprovado(valorImovel: number, valorEntrada: number) {
    let totalAprovado = valorImovel - valorEntrada;
    return totalAprovado;
  }

  rendaMinima() {
    const porcentagem = 0.3;
    const rendaMensal = this.imoveisForm.controls["renda"].value;
    const value = parseFloat(rendaMensal) * porcentagem;

    return value;
  }

  onSubmit() {
    const valorEntrada = parseFloat(
      this.imoveisForm.controls["valorEntrada"].value
    );
    const valorImovel = parseFloat(this.imoveisForm.controls["imoveis"].value);
    this.totalAprovado(valorEntrada, valorImovel);
    this.rendaMinima();

    let numParcelas: number = this.imoveisForm.controls["parcelas"].value;
    let parcelaInicial =
      (this.totalAprovado(valorEntrada, valorImovel) *
        ((100 + this.taxaAoAno * (numParcelas / 12)) / 100)) /
      numParcelas;

    this.parcelas = parcelaInicial.toString();
    this.valorTotal = this.totalAprovado(valorEntrada, valorImovel).toString();
    this.persistDataService.getInstallments(this.parcelas);
    this.persistDataService.getAmount(this.valorTotal);

    if (valorEntrada < valorImovel * 0.2) {
      this._snackBar.open(
        "O valor da entrada deve ser maior que 20% do valor do imóvel",
        "OK",
        {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "top",
        }
      );
    } else if (valorEntrada > valorImovel) {
      this._snackBar.open(
        "O valor da entrada deve ser menor que o valor do imóvel",
        "OK",
        {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "top",
        }
      );
    } else if (this.rendaMinima() > parcelaInicial) {
      this.router.navigateByUrl("/status/aprovado");
    } else {
      this.router.navigateByUrl("/status/reprovado");
    }
  }
}
