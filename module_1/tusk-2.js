const total = 100;

const checkQuantity = function (ordered) {
  if (ordered > total) {
    return console.log("На складе недостаточно твоаров!");
  } else {
    return console.log("Заказ оформлен, с вами свяжется менеджер");
  }
};
