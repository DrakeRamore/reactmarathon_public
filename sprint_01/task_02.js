function combineArray(arr1, arr2) {
    const array = [];
    for (let i = 0; i < arr1.length; i++) {
        if (Number.isInteger(arr1[i])) {
            array.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (Number.isInteger(arr2[i])) {
            array.push(arr2[i]);
        }
    }
    return array;
}

const arr1 = [12, "User01", 22, true, -8];
const arr2 = ["Index", 6, null, 15];
console.log("arr1 = ", arr1);
console.log("arr2 = ", arr2);

console.log("array = ", combineArray(arr1, arr2));