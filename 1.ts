// Описать типы для каждого элемента. Выполненное задание приложить в файле.

// TODO Enum
enum Action {
  Add = 'add',
  Delete = 'delete',
  Update = 'update'
}
const actionMap: Array<`${Action}`> = [
'add', 'delete', 'update'
];
const actionMap2: Array<'add' | 'delete' | 'update'> = [
'add', 'delete', 'update'
];
const actionMap3: Array<string> = [
'add', 'delete', 'update'
];

// TODO Interface
// Описание фунцкии в интерфейсе
interface Func {
  (id: number, isActive: boolean, callback: Function): Array<Array<string | number>>
}
 // типизация функции
function func (id: number, isActive: boolean, callback: () => any): (string | number)[][] {
return [
  [ 'name', 123 ]
]
}

// типизация идентичной функции только через интерфейс
const func2: Func = (id, isActive, callback) => {
  return [
  [ 'name', 123 ]
]
}

func(1, true, () => {});

// TODO Interface

interface User {
  id: number,
  name: string,
  items: User[] | null
}
const azaza: User = {
id: 123,
name: 'Eric',
items: [
  {
    id: 55,
    name: 'Masha',
    items: []
  },
  {
    id: 34,
    name: 'Max',
    items: null
  }
]
};

// Ключ может оказаться любым. Нужно создать интерфейс, описывающий объект n (типизировать ключи и значения)
interface FuncMap {
  [key: string | number | symbol]: (arg: number) => string 
}
const n: FuncMap = {
smth: function(number) {
  return 'test';
},
smth2: function(number) {
  return 'test';
},
smth3: function(number) {
  return 'test';
}
};