import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersistDataService } from 'src/app/shared/service/persist-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title: string = "Dados do imóvel";
  imoveisForm: FormGroup;
  imoveis;
  installments: string = "";
  amount: string = "";
  validarNumeroParcelas: boolean = false;


  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',
    separator: 2, prefix:"R$ "
  };

  

  constructor(
    private fb: FormBuilder,
    private persistDataService: PersistDataService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
 
  createForm() {
    this.persistDataService.imoveis.subscribe(imoveis => this.imoveis = imoveis);
    this.persistDataService.installments.subscribe(installments => this.installments = installments);
    this.persistDataService.amount.subscribe(amount => this.amount = amount)
    
    this.imoveisForm = this.fb.group({
      tipoImoveis: ['', Validators.required],
      renda: ['', Validators.required],
      imoveis: ['', Validators.required],
      entry: ['', [
          Validators.required
        ]
      ],
      installments: [null, Validators.required],
    });
  }
  entrySum(event){
    let valorEntrada = this.imoveisForm.controls['entry'].value;
    console.log(valorEntrada);
  }

  public validateNumber(event){
    let NumeroParcelas = this.imoveisForm.controls['installments'].value;
    if(NumeroParcelas > 360){
      this.validarNumeroParcelas = true;
    }else {
      this.validarNumeroParcelas = false;
    }
  }

  onSubmit() {
    let valorEntradaNum = this.imoveisForm.controls['entry'].value;
    let valorImovelNum = this.imoveisForm.controls['imoveis'].value;
    let rendaMensalMin = (this.imoveisForm.controls['renda'].value)*0.3;
    let totalAprovado = valorImovelNum - valorEntradaNum;
    let taxaAoAno: number = 0.08;
    let parcelasNum: number = this.imoveisForm.controls['installments'].value;
    let parcelaInicial = (totalAprovado * ((100 + (taxaAoAno * (parcelasNum / 12)))/100)) / parcelasNum;
    this.installments = parcelaInicial.toString();
    this.amount = totalAprovado.toString()
    this.persistDataService.getInstallments(this.installments);
    this.persistDataService.getAmount(this.amount)

    if (rendaMensalMin > parcelaInicial)
      this.router.navigateByUrl('/status')
      else this.router.navigateByUrl('/status/reprovado')
  }
}
