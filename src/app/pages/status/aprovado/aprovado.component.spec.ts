import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { AprovadoComponent } from './aprovado.component';

describe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovadoComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
