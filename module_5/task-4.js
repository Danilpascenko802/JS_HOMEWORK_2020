console.log('TASK-4');

class StringBuilder {
    constructor(string){
        this._value = string;
    }
    get value(){
        return this._value
    }
    // Геттер value - возвращает текущее значение поля _value
    // 
    append(str){
        let arr = this._value.split("");
        arr.push(str)
        this._value = arr.join("")
    }
    // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
    // 
    prepend(str){
        let arr = this._value.split("");
        arr.unshift(str)
        this._value = arr.join("")
    }
    // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    // 
    pad(str){
        let arr = this._value.split("");
        arr.push(str)
        arr.unshift(str)
        this._value = arr.join("")
    }
    // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
//  DONE 