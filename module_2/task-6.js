console.log("TUSK_6");
let input;
const numbers = [];
let total = 0;

while (input){
    input = +prompt("Another one number");
    numbers.push(input)
    for(let i = 0 ; i < numbers.length; i+=1){
        total += i;
        return total;
    }
}

//   ********* НЕ ДОДЕЛАНО *********
