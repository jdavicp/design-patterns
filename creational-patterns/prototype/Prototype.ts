interface Prototype {
    clone(): Prototype;
}

class Animal implements Prototype {
    public name;
    public description;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    clone(): Animal {
        return Object.create(this);
    }
}

let animal = new Animal(' ',' ');
let dog = animal.clone()
console.log(animal)
console.log(dog)
