// const names = ['Thanh','Trang', 'Thuy'];

// Array-like object
// const obj = {
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thuy',
//     length: 3
// };

// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }


// function sum(a, b) {
//     return a + b;
// }

// When num of parameters non-fixed
// in a normal function has arguments in scope the function

// Arguments - Array-like object
function sum() {
    // var result = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     result += arguments[i];
    // }
    // return result;

    const numbers = Array.from(arguments);
    // convert Array-like object to array in JS
    return numbers.reduce(function(acc, item) {
        return acc + item
    }, 0);
}

console.log(sum(1, 2, 3, 4, 5));



