import {MenuItem} from './menu-item.model';

export class CartItem {
    constructor(public menuItem: MenuItem,
        public qtd = 1) {

    }

    add(qtd: number) {
        this.qtd += qtd;
    }

    value(): number {
        return this.menuItem.price * this.qtd;
    }
}