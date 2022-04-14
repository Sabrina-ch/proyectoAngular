import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBmComponent } from './productos-bm.component';

describe('ProductosBmComponent', () => {
  let component: ProductosBmComponent;
  let fixture: ComponentFixture<ProductosBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosBmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
