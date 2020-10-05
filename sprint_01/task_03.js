function longestLogin(loginList) {
    var answer = loginList[0];
    for (let i = 1; i < loginList.length; i++) {
        if (loginList[i].length >= answer.length) {
            answer = loginList[i];
        }
    }
    return answer;
}

const array = ["user1", "user2", "333", "user4", "aa"];
console.log("answer is", longestLogin(array));