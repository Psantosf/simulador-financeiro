import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let router: Router;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, NoopAnimationsModule, RouterTestingModule],
    }).compileComponents().then(() => {
      
      router = TestBed.get(Router);
      router.initialNavigation();
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se a função HomePage() foi definida ', () => {
    expect(component.homePage).toBeDefined();
  });

  it('Deve verificar se existe Logotipo', () => {
    expect(component.logotipo).toEqual('../../../assets/images/logotipo.png');
  });

  it('deve verificar se o titulo foi definido corretamente ', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toContain('Simulador de financiamentos');
  });

  it('Deve verificar a rota ao clicar no logotipo ', () => {
    spyOn(component, 'homePage');
    el = fixture.debugElement.query(By.css('a')).nativeElement;
    el.click();
    expect(component.homePage).toHaveBeenCalledTimes(1);
  });  
});
