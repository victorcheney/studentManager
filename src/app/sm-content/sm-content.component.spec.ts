import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmContentComponent } from './sm-content.component';

describe('SmContentComponent', () => {
  let component: SmContentComponent;
  let fixture: ComponentFixture<SmContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
