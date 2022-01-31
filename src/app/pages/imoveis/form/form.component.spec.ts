import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { ImoveisRoutingModule } from "../imoveis-routing.module";

import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

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
  
  it('deve verificar se a função createForm() foi definida ', () => {
    expect(component.createForm).toBeDefined();
  });
});
