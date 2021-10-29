// Arrow function expresssion
// fat arrow

// function sum(a, b) {
//     return a + b;
// }

// sum(1, 2)

// var sum2 = function(a, b) {
//     return a + b
// }

// sum2(2, 3)

// var sum = (a, b) => {
//     return a + b;

// var a = {
//     name: "AAA",
//     run: function() {
//         var run2 = function () {
//             console.log(this.name)
//         }.bind(a);
//         run2();
//     }
// }

var a = {
    foo: 'var',
    run: function() {
        setTimeout(function() {
            console.log(this.foo);
        }.bind(this), 2000)
    }
}

a.run();

var b = {
    foo: 'var',
    run: function() {
        setTimeout(function(){
            // console.log(this.foo)
            setTimeout(()=> {
                console.log(this.foo)
            } , 2000)
        } , 2000)
    }
}

b.run()

// Arrow function có tính kết thừa this của hàm cha chứa nó
// Normal function thì không

