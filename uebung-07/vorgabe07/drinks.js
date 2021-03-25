// const { count } = require("node:console");

/**
 * size: Flaschengröße in Litern
 * price: Preis pro Flasche
 * stock: Anzahl Flaschen vorrätig
 **/
let stock = [{
        brand: "Berliner Pilsener",
        type: "beer",
        size: 0.5,
        price: 0.72,
        stock: 27
    },
    {
        brand: "Vita Cola",
        type: "soft drink",
        size: 1,
        price: 1.35,
        stock: 10
    },
    {
        brand: "Pilsener Urquell",
        type: "beer",
        size: 0.5,
        price: 0.95,
        stock: 18
    },
    {
        brand: "Sternburg Export",
        type: "beer",
        size: 0.5,
        price: 0.48,
        stock: 36
    }
]

let counter = function (data, type) {
    let literBeer = 0;
    for (let beverage of data) {
        if (beverage.type === type) {
            literBeer += (beverage.size * beverage.stock)
        } else continue;
    }
    return literBeer;
}

console.log(counter(stock, 'beer'));

let status = function (data, type) {
    for (let beverage of data) {
        if (beverage.brand === type) {
            return true
        }
    }
    return false
}

console.log(status(stock, 'Vita Cola'))

let mwst = (function (data, mwst) {
    for (let beverage of data) {
        beverage.price += beverage.price * (mwst/100);
    }
})(stock, 19)

console.log(stock);

let cheapest = function(data){
    let cheapestPrice = Infinity;
    let cheapestBeer = '';

    for(let beverage of data){
        let pricePerLiter = (beverage.price/beverage.size);
 
        if(beverage.type === 'beer' && cheapestPrice > pricePerLiter){
            cheapestPrice = pricePerLiter;
            cheapestBeer = beverage;
        }
        else continue;
    }
    return cheapestBeer;
}

console.log(cheapest(stock));

let over10 = function(data){
    for(beverage of data){
        if(beverage.stock < 10) return false;
    }
    return true;
}

console.log(over10(stock));