function getMin(arr) {
    return Math.min.apply(this, arr);
}

const arr = [-2, 6, 22, 13, 7];
//console.log(Math.min(...arr));
console.log(getMin(arr));