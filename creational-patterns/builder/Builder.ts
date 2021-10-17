interface CarFormat {
    setModel(model: string): void;
    setColor(color: string): void;
    setPrice(price: number): void;
    setDescription(description: string): void;
}

class Car implements CarFormat {
    private model!: string;
    private color!: string;
    private price!: number;
    private description!: string;
    
    setModel(model: string): void {
        this.model = model;
    }
    setColor(color: string): void {
        this.color = color;
    }
    setPrice(price: number): void {
        this.price = price;
    }
    setDescription(description: string): void {
        this.description = description;
    }
}

interface CarBuilder {
    buildModel(model: string): void;
    buildColor(color: string): void;
    buildPrice(price: number): void;
    buildDescription(description: string): void;
    getCar(): Car;
}

class LuxuryCar implements CarBuilder{
    private car: Car;
    
    constructor() {
        this.car = new Car();
    }

    buildModel(model: string): this {
        this.car.setModel(model);
        return this;
    }
    buildColor(color: string): this {
        this.car.setColor(color);
        return this;
    }
    buildPrice(price: number): this {
        this.car.setPrice(price);
        return this;
    }
    buildDescription(description: string): this {
        this.car.setDescription(description);
        return this;
    }
    getCar(): Car {
        return this.car;
    }

}

let luxuryCar: CarBuilder = new LuxuryCar().buildColor("blue").buildModel("Lamborghini Gallardo").buildPrice(2500000);
console.log(luxuryCar);