import { By } from "@angular/platform-browser";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header.component";
import { DebugElement } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("HeaderComponent", () => {
  let fixture: ComponentFixture<HeaderComponent> = null;
  let component: HeaderComponent;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("deve verificar se existe titulo 'Simulador de financiamentos' ", () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector("mat-toolbar h1").textContent).toContain(
  //     "Simulador de financiamentos"
  //   );
  // });
  // it("deve verificar se o titulo foi definido corretamente ", () => {
  //   fixture.detectChanges();
  //   de = fixture.debugElement.query(By.css("h1"));
  //   el = de.nativeElement;

  //   expect(el.textContent).toContain("Simulador de financiamentos");
  // });

  // it("deve verificar a função HomePage() ", () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   expect(component.homePage).toBeDefined();
  // });

  // it("deve verificar a função HomePage() toequal ", () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   expect(component.homePage).toEqual("/");
  // });
});
