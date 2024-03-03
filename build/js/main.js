"use strict";
// let nama = 'Ridho Al'
// console.log(nama)
//function
const add = (a, b) => {
    return a + b;
};
const show = (message) => {
    console.log(message);
};
show(add(1, 2));
//function with type
let tambah = function (c, d) {
    return c * d;
};
show(tambah(3, 5));
let kurang = function (x, y) {
    return x - y;
};
show(kurang(10, 4));
//optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
show(addAll(4, 5));
//rest parameters
const tambahRest = (a, ...args) => {
    return a + args.reduce((prev, curr) => prev + curr);
};
show(tambahRest(3, 2, 4, 3, -9));
