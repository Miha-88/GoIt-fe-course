import users from "../script/users.js";

("use strict");

const getUserWithEmail = (users, email) => {
  return users.find((user) => {
    return user.email === email;
  });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
