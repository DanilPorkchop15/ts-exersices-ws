// 1) Написать тип для функции, которая принимает один аргумент - число или строку. Если пришло число - возвращает {d: 1}, если пришла строка {z: 2}

type Input = number | string;
type Return<T extends Input> = T extends number
  ? { d: 1 }
  : { z: 2 }

function f<T extends Input>(arg: T): Return<T> { 
  if (typeof arg === "number") return { d: 1 } as Return<T>;  // не работает без приведения типов
  return { z: 2 } as Return<T>;  // не работает без приведения типов
}

console.log(f(1).d)
console.log(f("123").z)
// console.log(f(1).z) // error
// console.log(f("123").d) // error
// console.log(f([1, 2 ,3])) // error


// 2) Реализовать класс SomeClass:
class SomeClass<T extends { [key: string]: any }> {
  run(name: keyof T, value: T[keyof T] | null) {
    console.log(name, value);
  }
}

const a = new SomeClass<{
  runMethodOne: number;
  runMethodTwo: void;
}>();

a.run("runMethodOne", 1);
a.run("runMethodTwo", null);

a.run("runMethodsdjhfbs", null); //error
