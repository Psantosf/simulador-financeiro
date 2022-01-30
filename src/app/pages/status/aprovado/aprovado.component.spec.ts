import { CommonModule } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { StatusRoutingModule } from "../status-routing.module";

import { AprovadoComponent } from "./aprovado.component";

describe("AprovadoComponent", () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule
      ],
      declarations: [ AprovadoComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
