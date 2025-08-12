import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstabelecimentosComponent } from './card-estabelecimentos.component';

describe('CardEstabelecimentosComponent', () => {
  let component: CardEstabelecimentosComponent;
  let fixture: ComponentFixture<CardEstabelecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEstabelecimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
