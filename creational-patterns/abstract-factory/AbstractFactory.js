const CarFactory = (model, price, color) => {
    return {
        model: model,
        price: price,
        color: color
    }
}

const PopularCar = (model, price, color) => {
    let popCar = CarFactory(model, price, color);
    Object.assign(popCar, {type: "A popular car"});
    return popCar;
}


console.log(PopularCar("fiat",20000,"grey"));