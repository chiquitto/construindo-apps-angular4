import {Injectable} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItem} from '../models/cart-item.model';
import {Order} from '../models/order.model';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: Http) {}

    cartItens(): CartItem[] {
        return this.cartService.itens;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    removeItem(item: CartItem) {
        this.cartService.removeItem(item);
    }

    itensValue(): number {
        return this.cartService.total();
    }


    checkOrder(order: Order): Observable<string> {
        let url = `${MEAT_API}/orders`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(url,
            JSON.stringify(order),
            new RequestOptions({headers: headers}))
            .map(response => response.json())
            .map(response => response.id)
            ;
    }

    clear() {
        this.cartService.clear();
    }
}