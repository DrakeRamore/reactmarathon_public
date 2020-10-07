const filterNums = (array, number, parameter) => {
    if (parameter == "greater"){
        const modifyArray = array.filter(arr => arr > number);
        return modifyArray;
    }
    else if (parameter == "less"){
        const modifyArray = array.filter(arr => arr < number);
        return modifyArray;
    }
    else {
        if (number == undefined) {
            const modifyArray = array.filter(arr => arr > 0);
            return modifyArray;
        }
        else {
            const modifyArray = array.filter(arr => arr > number);
            return modifyArray;
        }
    }
};

console.log(filterNums([-3, 3, 4, 0, 44, -11, 5]));