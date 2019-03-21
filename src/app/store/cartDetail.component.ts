import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'cartDetail.component.html'
})
export class CartDetailComponent {

  constructor(public cart: Cart,public routes: Router)
  {
  }
  getstore()
  {
    return this.routes.navigate(['/store']);
  }
  getcheckoutpage()
  {
    return this.routes.navigate(['/checkout']);
  }
}
