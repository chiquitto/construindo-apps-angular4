
import {CartItem} from '../models/cart-item.model';
import {MenuItem} from '../models/menu-item.model';

export class ShoppingCartService {
    itens: CartItem[] = [];

    clear() {
        this.itens = [];
    }

    addItem(ii: MenuItem) {
        let foundItem = this.itens.find((mItem) => {
            return ii.id === mItem.menuItem.id;
        });

        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.itens.push(new CartItem(ii));
        }
    }

    removeItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }

    total(): number {
        return this.itens
            .map(item => item.value())
            .reduce((prev, value): number => prev + value, 0);
    }

    increaseQty(item: CartItem) {
        item.add(1);
    }

    decreaseQty(item: CartItem) {
        item.qtd--;

        if (item.qtd <= 0) {
            this.removeItem(item);
        }
    }
}