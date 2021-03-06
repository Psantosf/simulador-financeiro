import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  titulo: String = 'Simulador de financiamentos';
  logotipo: String = '../../../assets/images/logotipo.png';
  constructor(private router: Router) {}
}
