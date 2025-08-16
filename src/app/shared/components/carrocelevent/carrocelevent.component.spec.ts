import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroceleventComponent } from './carrocelevent.component';

describe('CarroceleventComponent', () => {
  let component: CarroceleventComponent;
  let fixture: ComponentFixture<CarroceleventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroceleventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroceleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
