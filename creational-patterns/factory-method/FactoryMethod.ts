
class Food {
    private price: number;
    private ingredients: string[];
    private name: string;

    constructor(name: string, price: number, ingredients: string[]) {
        this.price = price;
        this.ingredients = ingredients;
        this.name = name;
    }
    getPrice(): number {
        return this.price;
    };
    getIngredients(): string[] {
        return this.ingredients
    };
    getName(): string {
        return this.name;
    }

    food(): Food {
        return new Food(this.getName(), this.getPrice(), this.getIngredients());
    }
}

const acai = new Food('Açaí', 10.45,['poupa de açaí', 'banana', 'morango', 'mel']).food();
const bolo = new Food('Bolo', 25.36,['chocolate', 'farinha de trigo', 'ovos', 'fermento', 'açucar']).food();

console.log(acai);
console.log(bolo);






