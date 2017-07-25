class Order {
    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItens: OrderItem[] = []
    ) {}
}

class OrderItem {
    constructor(public qtd: number, public menuId: string) {}
}

export {Order, OrderItem};