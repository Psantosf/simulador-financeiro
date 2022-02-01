import { PersistDataService } from "./../../../shared/service/persist-data.service";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-aprovado",
  templateUrl: "./aprovado.component.html",
  styleUrls: ["./aprovado.component.scss"],
})
export class AprovadoComponent{
  titulo = "Aprovado";
  subscription!: Subscription;
  parcela!: string;
  valorTotal!: string;

  constructor(
    private persistDataService: PersistDataService
  ) {
    this.persistDataService.parcelas.subscribe(
      (parcela) => (this.parcela = parcela)
    );
    this.persistDataService.valorTotal.subscribe(
      (valorTotal) => (this.valorTotal = valorTotal)
    );
  }
}
