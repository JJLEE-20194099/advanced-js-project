var a = 1
var a = 2
// trong JS cho phép tạo 2 biến giống nhau bằng var hsay khai báo lại
// tuy nhiên với let và const thì không

// a được khai báo bằng var nên nó có thể hoisting được
// còn const và let thì không'

function scope() {
    // function scope
    var x = 1;
}

// scope();
// console.log(x);
// Die

if (true) {
    // Block scope
    var x = 1;
}

console.log(x);
// Ok. Để tránh trường hợp dị thường như vậy
// ta sẽ dùng let, const thay var

