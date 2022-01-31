import { PersistDataService } from "./../../../shared/service/persist-data.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-aprovado",
  templateUrl: "./aprovado.component.html",
  styleUrls: ["./aprovado.component.scss"],
})
export class AprovadoComponent implements OnInit {
  titulo = "Aprovado";
  subscription!: Subscription;
  parcela!: string;
  valorTotal!: string;

  constructor(
    private persistDataService: PersistDataService,
    private router: Router
  ) {
    this.persistDataService.parcelas.subscribe(
      (parcela) => (this.parcela = parcela)
    );
    this.persistDataService.valorTotal.subscribe(
      (valorTotal) => (this.valorTotal = valorTotal)
    );
  }

  ngOnInit() {}
  
  pageHome() {
    this.router.navigateByUrl("/");
  }
}
