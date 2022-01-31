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
    component.ngOnInit();
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

  it('deve verificar se a função imaskConfigCPF foi definida ', () => {
    fixture.detectChanges();
    expect(component.imaskConfigCPF).toBeDefined();
  });

  it('deve verificar se a função createForm() foi definida ', () => {
    fixture.detectChanges();
    expect(component.createForm).toBeDefined();
  });
  it("deve verificar se a função getNome() foi definida ", () => {
    fixture.detectChanges();
    expect(component.getNome).toBeDefined();
  });
  it("deve verificar se a função onSubmit() foi definida ", () => {
    fixture.detectChanges();
    expect(component.onSubmit).toBeDefined();
  });

  it('deve chamar o metodo de onSubmit', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
  
  it('deve chamar o metodo de pageHome', () => {
    spyOn(component, 'pageHome');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.pageHome).toHaveBeenCalledTimes(1);
  });
});
