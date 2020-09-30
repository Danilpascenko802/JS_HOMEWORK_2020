let credits = 23580;
const pricePerDroid = 3000;

let droidQuality = prompt("Enter, please quality of droids!");

const droidCount = function () {
  if (droidQuality === null) {
    alert("Отменено пользователем!");
  } else {
    let totalPrice = droidQuality * pricePerDroid;
    if (totalPrice > credits) {
      alert("Недостаточно средств на счету!");
    } else {
      alert(
        `Вы купили ${droidQuality} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`
      );
    }
  }
};
droidCount();
