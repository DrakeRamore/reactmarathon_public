/*const arr1 = [1,2,3];
const arr2 = [4,5,6];

const array = arr1.concat(arr2);
console.log("array = ", array);*/

/*function modifyArray(array) {
    array[0] = "Start";
    array[array.length - 1] = "End";

    return array;
}

const array = [1,2,3,4,5];
console.log(array);

modifyArray(array);
console.log(array);

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

var word = "word";
console.log("word's length is ", word.length);*/

/*function longestLogin(loginList) {
    var answer = loginList[0];
    for (let i = 1; i < loginList.length; i++) {
        if (loginList[i].length >= answer.length) {
            answer = loginList[i];
        }
    }
    return answer;
}

const array = ["user1", "user2", "333", "user4", "aa"];
console.log("answer is", longestLogin(array));*/

/*function factorial(n) {
    var result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    //var result = n * factorial(n - 1);
    return result;
}

//console.log("result is", factorial(4));

function processArray(arr, factorial) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(factorial(arr[i]));
    }
    return array;
}

const array = [1,2,3,4,5];

console.log("array is", processArray(array, factorial));*/

function checkAdult(age){
    if (age == undefined) {
        throw new Error("Please, enter your age");
    }
    else if (age < 0) {
        throw new Error("Please, enter positive number");
    }
    else if (isNaN(age)) {
        throw new Error("Please, enter number");
    }
    else if (!Number.isInteger(age)) {
        throw new Error("Please, enter Integer number");
    }
    else if (age < 18) {
        throw new Error("Access denied - you are too young!");
    }
    else {
        return "Access allowed";
    }
}

var age = 1;

try {
    checkAdult(age);
}
catch (exception) {
    console.error(exception.message);
}
finally {
    console.log("Age verification complete");
}