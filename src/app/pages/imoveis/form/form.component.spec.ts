import { CommonModule } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { ImoveisRoutingModule } from "../imoveis-routing.module";

import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        ImoveisRoutingModule,
        SharedModule,
        ImoveisRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      declarations: [ FormComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
