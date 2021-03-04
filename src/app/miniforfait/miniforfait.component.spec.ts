import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniforfaitComponent } from './miniforfait.component';

describe('MiniforfaitComponent', () => {
  let component: MiniforfaitComponent;
  let fixture: ComponentFixture<MiniforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
