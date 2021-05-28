import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLineLiveServerComponent } from './base-line-live-server.component';

describe('BaseLineLiveServerComponent', () => {
  let component: BaseLineLiveServerComponent;
  let fixture: ComponentFixture<BaseLineLiveServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLineLiveServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLineLiveServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
