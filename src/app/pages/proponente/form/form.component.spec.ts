import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { FormComponent } from "./form.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { ProponenteRoutingModule } from "../proponente-routing.module";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule,
        ProponenteRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      declarations: [FormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deve verificar se o título da página é Dados do proponente", () => {
    expect(component.titulo).toEqual("Dados do proponente");
  });

  it("deve verificar se o proponenteForm está definido", () => {
    expect(component.proponenteForm).toBeDefined();
  });

  it("deve verificar se o proponente está definido", () => {
    expect(component.proponente).toBeDefined();
  });

  it("deve verificar se a função imaskConfigCPF foi definida ", () => {
    expect(component.imaskConfigCPF).toBeDefined();
  });

  it("deve verificar se a função imaskConfigCEP foi definida ", () => {
    expect(component.imaskConfigCEP).toBeDefined();
  });

  it("deve verificar se a função imaskConfigCelular foi definida ", () => {
    expect(component.imaskConfigCelular).toBeDefined();
  });

  it("deve verificar se a função createForm() foi definida ", () => {
    fixture.detectChanges();
    expect(component.createForm()).toBeUndefined();
  });

  it("Deve verificar se está vazio o formulário", () => {
    fixture.detectChanges();
    component.proponenteForm.controls.nome.setValue("");
    component.proponenteForm.controls.profissao.setValue("");
    component.proponenteForm.controls.cpf.setValue("");
    component.proponenteForm.controls.email.setValue("");
    component.proponenteForm.controls.nascimento.setValue("");
    component.proponenteForm.controls.cep.setValue("");
    component.proponenteForm.controls.celular.setValue("");
    expect(component.proponenteForm.valid).toBeFalsy();
  });


  it('Deve verificar se o campo nome é valido', () => {
    fixture.detectChanges();
    const nome = component.proponenteForm.controls.nome;
    expect(nome.valid).toBeFalsy();
    nome.setValue('');
    expect(nome.hasError('required')).toBeTruthy();
  });

  it('Deve verificar se o campo profissão é valido', () => {
    const profissao = component.proponenteForm.controls.profissao;
    expect(profissao.valid).toBeFalsy();
    profissao.setValue('');
    expect(profissao.hasError('required')).toBeTruthy();
  });

  it('Deve verificar se o campo cpf é valido', () => {
    const cpf = component.proponenteForm.controls.cpf;
    expect(cpf.valid).toBeFalsy();
    cpf.setValue('');
    expect(cpf.hasError('required')).toBeTruthy();
  });

  it('Deve verificar se o campo email é valido', () => {
    const email = component.proponenteForm.controls.email;
    expect(email.valid).toBeFalsy();
    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('Deve verificar se o campo nascimento é valido', () => {
    const nascimento = component.proponenteForm.controls.nascimento;
    expect(nascimento.valid).toBeFalsy();
    nascimento.setValue('');
    expect(nascimento.hasError('required')).toBeTruthy();
  });

  it('Deve verificar se o campo cep é valido', () => {
    const cep = component.proponenteForm.controls.cep;
    expect(cep.valid).toBeFalsy();
    cep.setValue('');
    expect(cep.hasError('required')).toBeTruthy();
  });

  it('Deve verificar se o campo celular é valido', () => {
    const celular = component.proponenteForm.controls.celular;
    expect(celular.valid).toBeFalsy();
    celular.setValue('');
    expect(celular.hasError('required')).toBeTruthy();
  });

  it("deve verificar se a função onSubmit() foi definida ", () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
    expect(component.onSubmit()).toBeUndefined();
  });

  it("deve chamar o metodo de onSubmit", () => {
    spyOn(component, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('form should be valid', () => {
    fixture.detectChanges();
    component.proponenteForm.controls.nome.setValue('Priscila');
    component.proponenteForm.controls.profissao.setValue('Desenvolvedora');
    component.proponenteForm.controls.cpf.setValue('12312312312');
    component.proponenteForm.controls.email.setValue('priscila@emeal.nttdata.com');
    component.proponenteForm.controls.nascimento.setValue('03-05-1994');
    component.proponenteForm.controls.cep.setValue('09410110');
    component.proponenteForm.controls.celular.setValue('132456789');
    expect(component.proponenteForm.invalid).toBeTruthy();
  });


});
