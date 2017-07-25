import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from '../services/order.service';
import {CartItem} from '../models/cart-item.model';
import {Order, OrderItem} from '../models/order.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(5)
      ]),
      email: this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(this.emailPattern)
      ]),
      emailConfirmation: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      address: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      number: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [
        Validators.required,
      ])
    });
  }

  deliveryCost(): number {
    return this.itensValue() * 0.1;
  }

  itensValue(): number {
    return this.orderService.itensValue();
  }

  cartItens(): CartItem[] {
    return this.orderService.cartItens();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem) {
    this.orderService.removeItem(item);
  }

  checkOrder(order: Order) {
    order.orderItens = this.cartItens()
        .map((item: CartItem) => new OrderItem(item.qtd, item.menuItem.id));

    this.orderService.checkOrder(order)
        .subscribe((orderId: string) => {
          this.orderService.clear();

          this.router.navigate(['/order-sumary']);
    });

    console.log(order);
  }

}

