import users from "../script/users.js";

("use strict");

const getUsersWithFriend = (users, friendName) => {
   return users
   .filter((user) => user.friends.some((friend) => friend === friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
