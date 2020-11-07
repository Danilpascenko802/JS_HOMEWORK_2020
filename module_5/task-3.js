console.log('TASK-3');

class Storage {
  constructor(array){
    this.items = array;
  }
  getItems(){
    return this.items
  }
  // getItems() - возвращает массив текущих товаров
  // 
  addItem(item){
    this.items.push(item)
  }
  // addItem(item) - получает новый товар и добавляет его к текущим
  // 
  removeItem(item){
    this.items.forEach((elem, indx) => {
      if(item === elem){
        this.items.splice(indx, 1)
      }
    });
  }
  // removeItem(item) - получет товар и, если он есть, удаляет его из текущих
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
  //  DONE 