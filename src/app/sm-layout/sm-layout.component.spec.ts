import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmLayoutComponent } from './sm-layout.component';

describe('SmLayoutComponent', () => {
  let component: SmLayoutComponent;
  let fixture: ComponentFixture<SmLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
