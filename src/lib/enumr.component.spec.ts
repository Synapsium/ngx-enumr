import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumrComponent } from './enumr.component';

describe('EnumrComponent', () => {
  let component: EnumrComponent;
  let fixture: ComponentFixture<EnumrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
