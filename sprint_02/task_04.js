const maxInterv = (...numbers) => {
    var answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        let prom = Math.abs(numbers[i] - numbers[i + 1]);
        if (prom > answer) {
            answer = prom;
        }
    }
    return answer;
}

console.log(maxInterv(3, 5));