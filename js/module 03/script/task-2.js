"use strict";

const countProps = function(obj) {

  let total = 0;
  const count = Object.keys(obj);

  return count.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
