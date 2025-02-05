import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDropComponent } from './cart-drop.component';

describe('CartDropComponent', () => {
  let component: CartDropComponent;
  let fixture: ComponentFixture<CartDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
