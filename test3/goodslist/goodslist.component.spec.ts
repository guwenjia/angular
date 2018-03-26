import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodslistComponent } from './goodslist.component';

describe('GoodlistComponent', () => {
  let component: GoodslistComponent;
  let fixture: ComponentFixture<GoodslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});