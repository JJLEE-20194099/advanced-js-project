const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {e: 10}
};

// const obj2 = {}
// for (let key in obj1) {
//     obj2[key] = obj1[key];
// }

// <=>
let obj2 = {
    ...obj1
    // shallow cloning
}

obj2.d.e = 20;
console.log(obj1, obj2);



