console.log("TUSK_4");
const formatString = function (string) {
    let newString = "";
  if (string.length > 40) {
      newString = string.slice(0,40);
      newString = newString + "...";
      return newString;
  }else{
      return string;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

//Done