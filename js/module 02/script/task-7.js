"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const min = 3;
const max = 17;

const isLoginValid = function(login) {
  if (login.length > min && login.length < max) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  let message;

  isLoginValid("Ajax");
  isLoginValid("robotGoogles");
  isLoginValid("Zod");
  isLoginValid("jqueryisextremelyfast");

  if (isLoginValid === false) {
    return (message = "Ошибка! Логин должен быть от 4 до 16 символов");
  } else {
    isLoginUnique(logins, "Ajax");
    isLoginUnique(logins, "robotGoogles");
    isLoginUnique(logins, "Zod");
    isLoginUnique(logins, "jqueryisextremelyfast");

    if (isLoginUnique === false) {
      return (message = "Такой логин уже используется!");
    } else {
      allLogins.push(login);
      console.log(allLogins);
      return (message = "Логин успешно добавлен!");
    }
  }
};

//======================================

// const addLogin = function(allLogins, login) {
//   do {
//     let message;

//     isLoginValid("Ajax");
//     isLoginValid("robotGoogles");
//     isLoginValid("Zod");
//     isLoginValid("jqueryisextremelyfast");

//     if (isLoginValid === false) {
//       return (message = "Ошибка! Логин должен быть от 4 до 16 символов");
//     }
//   } while (isLoginValid === true);
//   {
//     isLoginUnique(logins, "Ajax");
//     isLoginUnique(logins, "robotGoogles");
//     isLoginUnique(logins, "Zod");
//     isLoginUnique(logins, "jqueryisextremelyfast");

//     if (isLoginUnique === false) {
//       return (message = "Такой логин уже используется!");
//     } else {
//       allLogins.push(login);
//       console.log(allLogins);
//       return (message = "Логин успешно добавлен!");
//     }
//   }
// };

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
