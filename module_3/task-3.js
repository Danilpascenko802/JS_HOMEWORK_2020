console.log("TASK-3");

const findBestEmployee = function (obj) {
  let best;
  let more = 0;
  for (const key in obj) {
    if (obj[key] > more) {
      more = obj[key];
      best = key;
    }
  }
  return best;
};
//  DONE
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// const obj = { lux: 147, david: 21, kiwi: 19, chelsy: 38 };

// let keys = Object.keys(obj);

// for (var i = 0, l = keys.length; i < l; i++) {
//   console.log(keys[i] + " is " + obj[keys[i]]);
//   // keys[i] - это ключ
//   // obj[keys[i]] - а это свойство, доступное по этому ключу
// }

// const findBestEmployee = function (employees) {
//   let values = [];
//   let bigest = 0;
//   let keys = Object.keys(employees);
//   for (let key of keys) {
//     values.push(employees[key]);
//   }
//   for (let i = 0; i < values.length; i += 1) {
//     if (values[i] > bigest) {
//       bigest = values[i];
//       // console.log(values[i] );
//     }
//   }
//   console.log(values);
//   return bigest;
// };
