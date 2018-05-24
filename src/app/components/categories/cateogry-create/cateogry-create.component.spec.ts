import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryCreateComponent } from './cateogry-create.component';

describe('CateogryCreateComponent', () => {
  let component: CateogryCreateComponent;
  let fixture: ComponentFixture<CateogryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
