import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryEditComponent } from './cateogry-edit.component';

describe('CateogryEditComponent', () => {
  let component: CateogryEditComponent;
  let fixture: ComponentFixture<CateogryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
