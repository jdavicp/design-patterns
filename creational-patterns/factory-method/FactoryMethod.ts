interface  FoodDelivery {
    deliver(): Food;
    payment(): number;
    
}

abstract class Food {
    private price: number;
    constructor(price: number) {
        this.price = price;
    }
    getprice(): number {
        return this.price
    };
    abstract ingredients(): string[];
}

class Acai extends Food {
    constructor() {
        super(11.50);
    }
    ingredients(): string[] {
        return ['poupa de açaí', 'banana', 'morango', 'mel'];
    }
    
}
class BikeDelivery implements FoodDelivery{
    
    deliver(): Food {
        return new Acai();
    }
    payment(): number {
        return this.deliver().getprice() + 5.00;
    }

}

let pedido = new BikeDelivery().deliver();
console.log(pedido);




