import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmFooterComponent } from './sm-footer.component';

describe('SmFooterComponent', () => {
  let component: SmFooterComponent;
  let fixture: ComponentFixture<SmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
