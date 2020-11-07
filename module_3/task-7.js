console.log("TASK-7");

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//  DONE

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    class transaction {
      constructor() {
        this.amount = amount;
        this.type = type;
        this.id = Math.random() * (10000000000000000000000 - 1) + 1;
      }
    }
    return new transaction
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    transactions.push(this.createTransaction(amount, deposit));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
      if(amount > this.balance){
          return 'снятие такой суммы не возможно, недостаточно средств!'
      }
      transactions.push(this.createTransaction(amount, withdraw));
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
      console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
      this.transactions.find(obj => obj.id === id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
      let total = 0;
      for(let i = 0; i < this.transactions.length; i+=1){

        if(type === this.transactions[i].type)
        total = this.transactions[i].amount + total
      }
      return total
  },
};
