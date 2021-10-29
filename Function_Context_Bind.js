var mouse = {
    name: 'Mickey',
    sayHi: function() {
        console.log('Hi my name is', this.name);
    }
};

// mouse.sayHi -> contenxt của function sayHi là mouse
// this -> mouse

var say = mouse.sayHi;
// say = function() {console.log(this.name)}
// context của function say là global context
// this -> đối tượng phụ thuộc vào trình duyệt của bạn
// this.name-> undefined
// How to fix

var say = mouse.sayHi.bind(mouse);
// return a new function with this points to mouse
say()