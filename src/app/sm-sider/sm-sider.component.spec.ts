import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSiderComponent } from './sm-sider.component';

describe('SmSiderComponent', () => {
  let component: SmSiderComponent;
  let fixture: ComponentFixture<SmSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
