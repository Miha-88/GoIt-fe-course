import users from "../script/users.js";

("use strict");

const getInactiveUsers = (users) => {
  return users.filter((user) => {
    return !user.isActive;
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
