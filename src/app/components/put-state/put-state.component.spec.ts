import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutStateComponent } from './put-state.component';

describe('PutStateComponent', () => {
  let component: PutStateComponent;
  let fixture: ComponentFixture<PutStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
