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
});
