import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { FormComponent } from "./form.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { ProponenteRoutingModule } from "../proponente-routing.module";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

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
  
  it("deve verificar se o título da página é Dados do proponente", () => {
    expect(component.titulo).toEqual("Dados do proponente");
  });

  
  it('deve verificar se a função imaskConfigCPF foi definida ', () => {
    fixture.detectChanges();
    expect(component.imaskConfigCPF).toBeDefined();
  });

  it('deve verificar se a função createForm() foi definida ', () => {
    expect(component.createForm).toBeDefined();
  });
});
