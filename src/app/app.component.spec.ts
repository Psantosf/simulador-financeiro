import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HomeModule } from "./pages/home/home.module";
import { ProponenteModule } from "./pages/proponente/proponente.module";
import { ImoveisModule } from "./pages/imoveis/imoveis.module";
import { StatusModule } from "./pages/status/status.module";

describe("AppComponent", () => {
  const PagesModule = [
    HomeModule,
    ProponenteModule,
    ImoveisModule,
    StatusModule,
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesModule],
      declarations: [AppComponent, HeaderComponent],
    }).compileComponents();
  }));
});
