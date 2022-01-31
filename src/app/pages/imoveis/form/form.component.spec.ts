import { CommonModule } from "@angular/common";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { ImoveisRoutingModule } from "../imoveis-routing.module";

import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        ImoveisRoutingModule,
        SharedModule,
        ImoveisRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      declarations: [FormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("deve verificar se o título da página é Dados do imóvel", () => {
    expect(component.titulo).toEqual("Dados do imóvel");
  });
  it("deve verificar se a Taxa ao Ano é de 0.08", () => {
    expect(component.taxaAoAno).toEqual(0.08);
  });
  it("deve verificar se a função getValueEntrada() foi definida ", () => {
    expect(component.getValueEntrada).toBeDefined();
  });
  it("deve verificar se a função getValueImovel() foi definida ", () => {
    expect(component.getValueImovel).toBeDefined();
  });
  it("deve verificar se a função totalAprovado() foi definida ", () => {
    expect(component.totalAprovado).toBeDefined();
  });
  it("deve verificar se a função rendaMinima() foi definida ", () => {
    expect(component.rendaMinima).toBeDefined();
  });
  it("deve verificar se a função onSubmit() foi definida ", () => {
    expect(component.onSubmit).toBeDefined();
  });
  
  it("deve chamar o metodo de onSubmit", () => {
    spyOn(component, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("deve chamar o metodo de pageProponente", () => {
    spyOn(component, "pageProponente");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(component.pageProponente).toHaveBeenCalledTimes(1);
  });
  it('Validar se o formulário está inválido ou vazio', () => {
    component.imoveisForm.controls.tipoImoveis.setValue('');
    component.imoveisForm.controls.renda.setValue('');
    component.imoveisForm.controls.imoveis.setValue('');
    component.imoveisForm.controls.valorEntrada.setValue('');
    component.imoveisForm.controls.parcelas.setValue('');
    expect(component.imoveisForm.valid).toBeFalsy();
  }); 

  it('Validar campo tipoImoveis', () => {
    const tipoImoveis = component.imoveisForm.controls.tipoImoveis;
    expect(tipoImoveis.valid).toBeFalsy();
    tipoImoveis.setValue('');
    expect(tipoImoveis.hasError('required')).toBeTruthy();
  });

  it('Validar campo renda', () => {
    const renda = component.imoveisForm.controls.renda;
    expect(renda.valid).toBeFalsy();
    renda.setValue('');
    expect(renda.hasError('required')).toBeTruthy();
  });
  it('Validar campo imoveis', () => {
    const imoveis = component.imoveisForm.controls.imoveis;
    expect(imoveis.valid).toBeFalsy();
    imoveis.setValue('');
    expect(imoveis.hasError('required')).toBeTruthy();
  });
  it('Validar campo valorEntrada', () => {
    const valorEntrada = component.imoveisForm.controls.valorEntrada;
    expect(valorEntrada.valid).toBeFalsy();
    valorEntrada.setValue('');
    expect(valorEntrada.hasError('required')).toBeTruthy();
  });
  it('Validar campo valorEntrada', () => {
    const parcelas = component.imoveisForm.controls.parcelas;
    expect(parcelas.valid).toBeFalsy();
    parcelas.setValue('');
    expect(parcelas.hasError('required')).toBeTruthy();
  });

});
