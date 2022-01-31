import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatusRoutingModule } from '../status-routing.module';

import { ReprovadoComponent } from './reprovado.component';

describe('ReprovadoComponent', () => {
  let component: ReprovadoComponent;
  let fixture: ComponentFixture<ReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule
      ],
      declarations: [ ReprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
