import users from "./users.js";
import { delay, logger } from "./task-1.js";
import { toggleUserState, logger1 } from "./task-2.js";
import {
  randomIntegerFromInterval,
  makeTransaction,
  logSuccess,
  logError,
} from "./task-3.js";

// Task-1 Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// Task-2 Вызовы функции для проверки
toggleUserState(users, "Mango").then(logger1);
toggleUserState(users, "Lux").then(logger1);

// Task-3 Вызовы функции для проверки
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
