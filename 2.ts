// 1) Написать тип для функции, которая принимает один аргумент - число или строку. Если пришло число - возвращает {d: 1}, если пришла строка {z: 2}

type TInput = number | string;
type TReturn<T> = T extends number
  ? { d: 1 }
  : T extends string
  ? { z: 2 }
  : never;

function f<T extends TInput>(arg: T) {
  if (typeof arg === "number") return { d: 1 } as TReturn<T>;
  return { z: 2 } as TReturn<T>;
}

// или
function f2(arg: number | string) {
  if (typeof arg === "number") return { d: 1 };
  return { z: 2 };
}
f2(1).d;
f2("t").z;

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
