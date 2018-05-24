import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryDetailsComponent } from './cateogry-details.component';

describe('CateogryDetailsComponent', () => {
  let component: CateogryDetailsComponent;
  let fixture: ComponentFixture<CateogryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
