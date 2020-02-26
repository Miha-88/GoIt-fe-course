"use strict";

const China = "китай";
const Chilly = "чили";
const Australia = "австралия";
const India = "индия";
const Jamaica = "ямайка";

let userCountry = prompt("Укажите название Вашей страны?");
let inLowerCase = userCountry.toLowerCase();
let message;

switch (inLowerCase) {
  case China:
    message = "Доставка в Китай будет стоить 100 кредитов.";
    break;

  case Chilly:
    message = "Доставка в Чили будет стоить 250 кредитов.";
    break;

  case Australia:
    message = "Доставка в Австралию будет стоить 170 кредитов.";
    break;

  case India:
    message = "Доставка в Индию будет стоить 80 кредитов.";
    break;

  case Jamaica:
    message = "Доставка в Ямайку будет стоить 120 кредитов.";
    break;

  default:
    message = "В вашей стране доставка не доступна.";
}

alert(message);
