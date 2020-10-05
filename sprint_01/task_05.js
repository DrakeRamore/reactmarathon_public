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