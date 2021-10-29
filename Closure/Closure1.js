function sum(a, b) {
    var c = a + b;
    
    return function() {
        console.log(c);
    }
}

sum(1, 2)();
// Why: tra ve 1 ham co tham chieu toi 1 bien da bi loai bo
// closure



