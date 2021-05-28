import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLineTestServerComponent } from './base-line-test-server.component';

describe('BaseLineTestServerComponent', () => {
  let component: BaseLineTestServerComponent;
  let fixture: ComponentFixture<BaseLineTestServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLineTestServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLineTestServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
