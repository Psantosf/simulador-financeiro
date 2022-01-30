import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { HomeModule } from "./pages/home/home.module";
import { ProponenteModule } from "./pages/proponente/proponente.module";
import { ImoveisModule } from "./pages/imoveis/imoveis.module";
import { StatusModule } from "./pages/status/status.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule],
      declarations: [AppComponent, HeaderComponent],
    }).compileComponents();
  }));

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
