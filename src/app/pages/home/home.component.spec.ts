import { MatCardModule, MatDividerModule } from "@angular/material";
import { TitleComponent } from "./../../shared/components/title/title.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [ HomeComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
