import { StatusModule } from "./pages/status/status.module";
import { ImoveisModule } from "./pages/imoveis/imoveis.module";
import { ProponenteModule } from "./pages/proponente/proponente.module";
import { HomeModule } from "./pages/home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./core/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

const PagesModule = [HomeModule, ProponenteModule, ImoveisModule, StatusModule];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    MatToolbarModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
