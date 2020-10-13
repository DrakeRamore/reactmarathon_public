const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
    let user = await getUser();
    let userInfo = await getUserProfile(user.id);
    return userInfo.age;
}