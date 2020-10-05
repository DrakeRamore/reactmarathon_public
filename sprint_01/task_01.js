function modifyArray(array) {
    array[0] = "Start";
    array[array.length - 1] = "End";

    return array;
}

const array = [1,2,3,4,5];
console.log(array);

modifyArray(array);
console.log(array);