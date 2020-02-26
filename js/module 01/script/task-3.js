"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const passwordEntry = prompt("Введите пароль!");

if (passwordEntry === null) {
  message = "Отменено пользователем!";
} else if (passwordEntry === "jqueryismyjam") {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
