import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmHeaderComponent } from './sm-header.component';

describe('SmHeaderComponent', () => {
  let component: SmHeaderComponent;
  let fixture: ComponentFixture<SmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
