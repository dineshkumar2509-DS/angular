import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyptomsComponent } from './syptoms.component';

describe('SyptomsComponent', () => {
  let component: SyptomsComponent;
  let fixture: ComponentFixture<SyptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
