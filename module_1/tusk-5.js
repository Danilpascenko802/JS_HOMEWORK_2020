let country;
let cost = [100, 250, 170, 80, 120];

switch ((country = prompt("Введити страну"))) {
  case "Китай":
    alert(`Доставка в ${country} будет стоить ${cost[1]} кредитов`);
    break;

  case "Чили":
    alert(`Доставка в ${country} будет стоить ${cost[2]} кредитов`);
    break;

  case "Австралия":
    alert(`Доставка в ${country} будет стоить ${cost[3]} кредитов`);
    break;

  case "Индия":
    alert(`Доставка в ${country} будет стоить ${cost[4]} кредитов`);
    break;

  case "Ямайка":
    alert(`Доставка в ${country} будет стоить ${cost[5]} кредитов`);
    break;

  case "":
    alert("Я для тебя какая то шутка?");
    break;

  case null:
    alert("Вы отказались вводить страну !!!");
    break;

  default:
    alert("В вашей стране доставка не доступна");
}