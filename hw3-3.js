'use strict';

/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15% */

const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

let productsDiscount = products.map(function (product) {
    let newPrice = product.price - product.price * 0.15;
    return Object.assign({}, product, (product.price = newPrice)); 
})

console.log(productsDiscount);
console.log(products); // ?? почему такой же результат? Как Object.assign переписал данные в const ??