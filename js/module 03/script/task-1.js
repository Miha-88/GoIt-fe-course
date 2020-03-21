"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

const change = {
  mood: "happy",
  hobby: "skydiving",
  premium: false
};

const userChange = Object.assign({}, user, change);

const keys = Object.keys(userChange);

for (const key of keys) {
  console.log(`key: ${key}, value: ${userChange[key]}`);
}
