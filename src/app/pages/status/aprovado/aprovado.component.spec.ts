import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadoComponent } from './aprovado.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule
      ],
      declarations: [ AprovadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
