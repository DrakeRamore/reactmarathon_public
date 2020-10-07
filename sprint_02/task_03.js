const howMuchSec = (...times) => {
    var result = 0;
    var multiplier = [1, 60, 3600, 86400, 2592000, 946080000];
    for (let i = 0; i < times.length; i++) {
        result += times[i] * multiplier[i];
    }
    return result;
}

console.log(howMuchSec(12, 3, 3, 3));