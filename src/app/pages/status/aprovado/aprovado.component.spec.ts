import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadoComponent } from './aprovado.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;
  let de: DebugElement;
  let el: HTMLElement;

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

  it("deve verificar se o título da página é Aprovado", () => {
    expect(component.titulo).toEqual("Aprovado");
  });

  it("deve verificar se existe o mat-card ", () => {
    const fixture = TestBed.createComponent(AprovadoComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card"));
    expect(de.nativeElement).toBeDefined();
  });

  it("deve verificar se existe o mat-card-title ", () => {
    const fixture = TestBed.createComponent(AprovadoComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("mat-card-title"));
    expect(de.nativeElement).toBeDefined();
  });
  
  it("deve chamar o metodo de onSubmit", () => {
    spyOn(component, "pageHome");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(component.pageHome).toHaveBeenCalledTimes(1);
  });
});
