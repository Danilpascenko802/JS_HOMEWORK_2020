console.log("TASK-5");
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let values = [];
  for (let i = 0; i < arr.length; i += 1) {
    for( const key in arr[i]){
      if(key === prop){
        let obj = arr[i]
        let val = key
        console.log(val);
        values.push(obj[key]) 
      }
    }
  }
  return values
};
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
// DONE

console.log(this);