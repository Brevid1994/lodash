const _ = require('lodash')

const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
  ];
  const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
  ];

//   Нужно найти и сохранить в переменную индекс пользователя в массиве data1, у которого возраст равен 23 года

const index = _.findIndex(data1, item => item.age === 23)
console.log(index);

// Объединить два массива data1 и data2 в один и записать этот результат в новую переменную

const data3 = _.concat(data1, data2)
console.log(data3);

// Взять любой объект из любого массива и на его основе создать новый объект, но выкинув из него поле “age”

const user  = {
    "age": 29,
    "name": "Calhoun Woodward",
    "email": "calhoun.woodward@medmex.info",
  }

  const newUser = _.omit(user, 'age')
  console.log(newUser);

//   Суперзадание - как выполнить задачу 3 без библиотек, а только средствами javascript

function createUser (obj){
    let anotherUser = {}
    for(let item in obj){
        if(item != 'age'){
            anotherUser[item] = obj[item]
        }
    }
    return anotherUser
}

console.log(createUser(user));