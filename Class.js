// function Mouse(name) {
//     this.name = name;
// }

// Mouse.prototype.run = function() {
//     console.log(`${this.name} is running`)
// }

class Animal {
    contructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`)
    }
}

class Mouse extends Animal {
    contructor(name) {
        // super(name);
        this.numOfLegs = 4;
    }
}

const mouse = new Mouse("JJLee");
mouse.run();
console.log(mouse.numOfLegs);