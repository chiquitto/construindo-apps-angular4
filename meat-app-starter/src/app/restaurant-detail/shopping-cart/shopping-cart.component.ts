import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {CartItem} from "../../models/cart-item.model";
import {MenuItem} from "../../models/menu-item.model";

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  itens(): CartItem[] {
    return this.shoppingCartService.itens;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear() {
    this.shoppingCartService.clear();
  }

  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

}
