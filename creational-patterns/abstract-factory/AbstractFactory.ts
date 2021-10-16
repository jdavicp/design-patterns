interface CarFactory {
    createCar(): Car;
}

interface Car {
    model(): string;
    price(): number;
    color(): string;
} 

class PopularCar implements Car{
    private modelCar: string;
    private priceCar: number;
    private colorCar: string; 
    
    constructor(model: string, price: number, color: string) {
        this.modelCar = model;
        this.priceCar = price;
        this.colorCar = color;
        
    }
    public price(): number {
        return this.priceCar;
    }
    public color(): string {
        return this.colorCar;
    }
    public model(): string {
        return this.modelCar;
    }

    public type(): string {
        return `This is a popular car with a price of ${this.price()}, a model ${this.model()} in the color ${this.color()}.`;
    }
    
}

class PopularCarFactory implements CarFactory{
    private model;
    private price;
    private color;
    constructor(model: string, price: number, color: string) {
        this.model = model;
        this.price = price;
        this.color = color;
    }
    createCar(): PopularCar {
        return new PopularCar(this.model,this.price,this.color);
    }
    
        
}
let carpop = new PopularCarFactory("fiat",20000, "grey").createCar();

console.log(carpop.type())