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
  parcelas: string = "";
  valorTotal: string = "";
  validarNumeroParcelas: boolean = false;
  parc: string = '';

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
    this.persistDataService.parcelas.subscribe(parcelas => this.parcelas = parcelas);
    this.persistDataService.valorTotal.subscribe(valorTotal => this.valorTotal = valorTotal)
    
    this.imoveisForm = this.fb.group({
      tipoImoveis: ['', Validators.required],
      renda: ['', Validators.required],
      imoveis: ['', Validators.required],
      valorEntrada: ['', [
          Validators.required
        ]
      ],
      parcelas: [null, Validators.required],
    });
  }
  valorEntradaSum(event){
    let valorEntrada = this.imoveisForm.controls['valorEntrada'].value;
    console.log(valorEntrada);
  }

  validateNumber(){
    let NumeroParcelas = this.imoveisForm.controls['parcelas'].value;
    if(NumeroParcelas > 360){
      this.validarNumeroParcelas = true;
    }else {
      this.validarNumeroParcelas = false;
    }
  }

  private getValueEntrada(){
    let valorEntrada:number = this.imoveisForm.controls['valorEntrada'].value;
    return valorEntrada;
  }

  private getValueImovel(){
    let valorImovel:number = this.imoveisForm.controls['imoveis'].value;
    console.log(valorImovel);
    return valorImovel;
  }

  private totalAprovado(){
    let totalAprovado = this.getValueImovel() - this.getValueEntrada();
    console.log('total', totalAprovado);
    console.log('total', 5 - 2);
    return totalAprovado;
  }
  onSubmit() {
    this.getValueEntrada();
    this.getValueImovel();
    this.totalAprovado();
    let rendaMensalMin = (this.imoveisForm.controls['renda'].value)*0.3;
    
    let taxaAoAno: number = 0.08;
    let parcelasNum: number = this.imoveisForm.controls['parcelas'].value;
    // let parcelaInicial = (totalAprovado * ((100 + (taxaAoAno * (parcelasNum / 12)))/100)) / parcelasNum;
    // this.parcelas = parcelaInicial.toString();
    // this.valorTotal = totalAprovado.toString()
    this.persistDataService.getInstallments(this.parcelas);
    this.persistDataService.getAmount(this.valorTotal)
//  console.log(this.getValueEntrada());
    // console.log(valorImovelNum);
    // console.log(totalAprovado);
    // console.log(taxaAoAno);
    // console.log(parcelasNum);
    // console.log(parcelaInicial);
    // console.log(rendaMensalMin);
    
    // if (rendaMensalMin > parcelaInicial){
    //   this.router.navigateByUrl('/status')
    //  } else {this.router.navigateByUrl('/status/reprovado')}
  }
}
