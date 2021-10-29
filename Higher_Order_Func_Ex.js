
function waitAndRun(ms, sum_func) {
    setTimeout(sum_func, ms);
}

let myFunc = (a, b) => a + b;

waitAndRun(2000, myFunc);

