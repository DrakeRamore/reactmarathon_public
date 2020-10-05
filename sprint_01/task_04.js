function factorial(n) {
    var result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function processArray(arr, factorial) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(factorial(arr[i]));
    }
    return array;
}

const array = [1,2,3,4,5];

console.log("array is", processArray(array, factorial));