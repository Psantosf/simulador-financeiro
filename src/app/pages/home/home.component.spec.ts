import { SharedModule } from "src/app/shared/shared.module";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from "./home.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deve verificar se o título da página é Tela inicial", () => {
    expect(component.titulo).toEqual("Tela inicial");
  });

  it("deve verificar se existe o mat-card ", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card"));
    expect(de.nativeElement).toBeDefined();
  });

  it("deve verificar se existe o mat-card-title ", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card-title"));
    expect(de.nativeElement).toBeDefined();
  });
  
  it("deve verificar se existe o mat-card-content", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card-content"));
    expect(de.nativeElement).toBeDefined();
  });

  it("deve verificar se existe o mat-divider ", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-divider"));
    expect(de.nativeElement).toBeDefined();
  });
});
