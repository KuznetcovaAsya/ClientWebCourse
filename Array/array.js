(function () {
    var array1 = [1, 1, 3, 8, 5, -6, 7, -8, -25, 17, 11, 35, 13, 14, 120, 17];
    console.log("Массив 1: " + array1);

    console.log("Массив 1 отсортирован по убыванию: " + sortDescending(array1));

    console.log("Подмассив из первых пяти элементов Массива 1: " + getStartNumbers(array1));

    console.log("Подмассив из последних пяти элементов Массива 1: " + getEndNumbers(array1));

    console.log("Cумма четных чисел Mассива 1: " + getEvenNumbersSum(array1));

    var array2 = [];
    for (var i = 0; i < 100; ++i) {
        array2.push(i + 1);
    }

    console.log("Массив 2: " + array2);

    console.log("Список квадратов четных чисел Массива 2: " + getEvenNumbersSquares());

    function sortDescending(array) {
        return array1.sort(function (a, b) {
            return b - a;
        });
    }

    function getStartNumbers(array) {
        return array1.slice(0, 5);
    }

    function getEndNumbers(array) {
        return array1.slice(-5);
    }

    function getEvenNumbersSum(array) {
        return array1.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (sum, current) {
            return sum + current;
        }, 0);
    }

    function getEvenNumbersSquares(array) {
        return array2.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return e * e;
        });
    }
}());