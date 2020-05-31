import users from "../script/users.js";

("use strict");

const calculateTotalBalance = (users) => {
  return users.reduce((accumulator, user) => {
    return accumulator + user.balance;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
