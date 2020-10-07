const sumOfLen = (...strings) => {
    var answer = strings.reduce((sum, current) => sum + current.length, 0);
    return answer;
}

console.log(sumOfLen("helllo", "world"));