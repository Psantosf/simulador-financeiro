import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validate } from 'src/app/core/utils/validate';
import { PersistDataService } from 'src/app/shared/service/persist-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title: string = "Dados do proponente";
  proponenteForm: FormGroup;
  proponente: any;

  imaskConfigCPF = {
    mask: '000.000.000-00'
  }
  imaskConfigPhone = {
    mask: '(00) 00000-0000'
  };

  constructor(
    private fb: FormBuilder,
    private persistDataService : PersistDataService,
    private router: Router) 
    {}

  ngOnInit() {
    this.createForm();
  }
 
  createForm() {
    this.persistDataService.proponente.subscribe(proponente => this.proponente = proponente)
    this.proponenteForm = this.fb.group({
      nome: new FormControl (
        this.proponente === {} ? null : 
        this.proponente.nome, [
          Validators.required,
          Validators.minLength(3), 
          Validators.pattern('^[A-Z a-zÀ-ú]*$')
        ]
      ),
      profissao: new FormControl(
        this.proponente === {} ? null : 
        this.proponente.profissao,[
          Validators.required,
          Validators.minLength(3)
        ]
      ) ,
      cpf: new FormControl(
        this.proponente === {} ? null : 
        this.proponente.cpf,[
          Validators.required,
          Validators.minLength(11)
        ]
      ),
      email: new FormControl(
        this.proponente === {} ? null : 
        this.proponente.email,[
          Validators.required,
          Validators.email
        ]
      ) ,
      nascimento: new FormControl(
        this.proponente === {} ? null : 
        this.proponente.nascimento,[
          Validators.required,
          Validate.ofLegalAge
        ]
      ) ,
      cep: new FormControl(
        this.proponente === {} ? null : 
        this.proponente.cep,[
          Validators.required,
          Validators.minLength(8)
        ]
      ) ,
      celular: new FormControl(
        this.proponente === {} ? null : 
        this.proponente.celular,[
          Validators.required,
          Validators.minLength(11)
        ]
      ),
    });
  }

  onSubmit() {
    this.persistDataService.getProponente(this.proponenteForm.value)
    this.router.navigateByUrl('/imoveis')
  }

}
