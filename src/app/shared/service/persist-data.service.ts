import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistDataService {

  private proponenteSource = new BehaviorSubject({})
  private imovelSource = new BehaviorSubject({})
  private passParcela = new BehaviorSubject('')
  private passValorTotal = new BehaviorSubject('')
  
  proponente = this.proponenteSource.asObservable();
  imoveis = this.imovelSource.asObservable();
  parcelas = this.passParcela.asObservable();
  valorTotal = this.passValorTotal.asObservable();
  
  
  constructor() { }
    
  //METODOS
  getProponente(proponente: Object) {
    this.proponenteSource.next(proponente)
  }
  
  getImmobile(imoveis: Object) {
    this.imovelSource.next(imoveis)
  }
  
  getInstallments(parcelas: string) {
    this.passParcela.next(parcelas)
  }
  
  getAmount(valorTotal: string) {
    this.passValorTotal.next(valorTotal)
  }
  
  
  }
  