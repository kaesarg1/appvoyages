import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablevoyagesComponent } from './tablevoyages.component';

describe('TablevoyagesComponent', () => {
  let component: TablevoyagesComponent;
  let fixture: ComponentFixture<TablevoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablevoyagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablevoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
