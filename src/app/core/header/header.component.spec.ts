import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  
  it("deve verificar se existe titulo 'Simulador de financiamentos' ", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar h1').textContent).toContain(
      "Simulador de financiamentos"
    );
  });

  it("deve verificar a função HomePage() ", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(component.homePage).toBeDefined();
  });

  it("deve verificar a função HomePage() toequal ", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(component.homePage).toEqual('/');
  });
});
