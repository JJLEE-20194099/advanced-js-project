// function log(a) {
//     console.log(a);
//     console.log(arguments);
// }

// log(1, 2, 3, 4);

function log(a, ...numbers) {
    console.log(a);
    console.log(numbers)
}

log(1, 2, 3, 4, 5);

// ... toan tu rest

function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0) 
}

console.log(sum(1, 2, 3, 4, 5, 6));

function concat(seperator, ...strings) {
    return strings.join(seperator);
}

console.log(concat('.', 'a', 'b', 'c'));
