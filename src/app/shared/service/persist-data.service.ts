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
  installments = this.passParcela.asObservable();
  amount = this.passValorTotal.asObservable();
  
  
  constructor() { }
    
  getProponente(proponente: Object) {
    this.proponenteSource.next(proponente)
  }
  
  getImmobile(imoveis: Object) {
    this.imovelSource.next(imoveis)
  }
  
  getInstallments(installments: string) {
    this.passParcela.next(installments)
  }
  
  getAmount(amount: string) {
    this.passValorTotal.next(amount)
  }
  
  
  }
  