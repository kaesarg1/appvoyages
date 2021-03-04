import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexiqueComponent } from './mexique.component';

describe('MexiqueComponent', () => {
  let component: MexiqueComponent;
  let fixture: ComponentFixture<MexiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MexiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MexiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
