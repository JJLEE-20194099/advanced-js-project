function greeting() {
    console.log(this.name, this.age);
}

var cat = {
    name: "JJLee",
    age: 3
}

greeting.call(cat);
// BIND return a new function
// CALL no return, call luôn

