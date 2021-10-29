// ...spread
const a = [1, 2, 3, 4]

function sum(...nums) {
    console.log(nums);
    return nums.reduce((acc, item) => acc + item, 0);
}

console.log(sum(...a));

