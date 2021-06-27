var array1 = [1, 1, 3, 8, 5, -6, 7, -8, -25, 17, 11, 35, 13, 14, 120, 17];
console.log("Массив 1: " + array1);

var sortedArray = array1.sort(function (a, b) {
    return b - a;
});

console.log("Массив 1 отсортирован по убыванию: " + sortedArray);

var arrayFromStartNumbers = array1.slice(0, 5);
console.log("Подмассив из первых пяти элементов Массива 1: " + arrayFromStartNumbers);

var arrayFromEndNumbers = array1.slice(-5);
console.log("Подмассив из последних пяти элементов Массива 1: " + arrayFromEndNumbers);

var evenNumbersSum = array1.filter(function (e) {
    return e % 2 === 0;
}).reduce(function (sum, current) {
    return sum + current;
}, 0);

console.log("Cумма четных чисел Mассива 1: " + evenNumbersSum);

var array2 = [];
for (var i = 0; i < 100; ++i) {
    array2[i] = i + 1;
}

console.log("Массив 2: " + array2);

var numbersSquares = array2.filter(function (e) {
    return e % 2 === 0;
}).map(function (e) {
    return e * e;
});

console.log("Список квадратов четных чисел Массива 2: " + numbersSquares);