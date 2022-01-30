import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reprovado',
  templateUrl: './reprovado.component.html',
  styleUrls: ['./reprovado.component.scss']
})
export class ReprovadoComponent implements OnInit {
  title: string = 'Reprovado';
  constructor( private router: Router) { }

  ngOnInit() {
  }

  pageHome() {
    this.router.navigateByUrl("/");
  }
}
