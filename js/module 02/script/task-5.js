"use strict";

const checkForSpam = function(message) {
  let formatting = message.toLowerCase();

  if (formatting.includes("sale")) {
    return true;
  } else if (formatting.includes("spam")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
