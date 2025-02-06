let isDone: boolean = true;  // boolean type

let decimal: number = 3;     // integer
let float: number = 3.14     // floating point
let hex: number = 0xf00d;    // hexadecimal (шістнадцяткове)
let binary: number = 0b1010; // binary (двійкове)
let octal: number = 0o744;   // octal (вісімкове)

let color: string = "blue";  // string

let empty: null = null;
let notParam: undefined = undefined;

//It is not necessary to specify the data type if you pass it explicitly
const num = 10;
const str = 'Some string';
const bool = true;
const empty = null;
const notParam = undefined;

//creat the arow function
const foo = (num: number, str: string, bool: boolean, empty: null) => {
  // Some logic
}

//Also, if we set a default value in a function, the type does not need to be specified.
const foo2 = (num = 2, str = "Hello", bool = true, empty = null) => {
  // Some logic
}

// object 
// ALL properties must be specified!!!!!!
const obj: object = {};
// we can record object data in two ways:
//first
let user: { name: string; age: number } = {
  name: "Tom",
  age: 30
};

//second
let user = {
  name: "Tom",
  age: 30
};

// To reuse the properties of an object, we can create a type or interface:
// type
type User = {
  name: string,
  age: number,
  isOnline: boolean
}

const userFirst: User = {
  name: "Tom",
  age: 15,
  isOnline: false
}
const userSecond: User = {
  name: "Jack",
  age: 21,
  isOnline: true
}

// interface
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: 'Tom',
  age: 30,
};


// Array
let arrString: string[];
arrString = ['Text', 'Text2'];

let arrNumber: number[];
arrNumber = [1, 5];

let mixed: (number | string)[] = [1, 'two'];

let mixed2: Array<number|string> = [1, 2, 3, "strg", 5];

let number: number [] = [1, 2, 5]

let users: {
    name: string;
    age: number;
}[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
]; 
// or
type Users: {
    name: string;
    age: number;
};
let userOne: Users[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];

// or we can define absolutely any data type
let arrAny: any[];
arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = {};

let num: number;

num = notSure;

// Unknown
function fetchUserData() {
  return 'Tom';
}

let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === 'string') {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}


// Tuple
// Кортеж, TypeScript це тип даних, що дозволяє визначити масив з фіксованою кількістю елементів, типи яких відомі, але не обов'язково повинні бути однаковими.
let tupleType: [string, boolean];
tupleType = ['hello', true]; // OK
tupleType = [true, 'hello']; // Error. Неправильні типи
tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple
// Кортежі зручні, коли нам потрібно зберегти в масив фіксовані значення, наприклад, день, місяць та рік.
let date: [number, string, number];
date = [02, "JUN", 2025];

// але метод push спрацьовує вірно:
let fixed: [string, number];
fixed = ['Text', 10];
fixed.push('Add this text');
console.log(fixed);  //  ["Text", 10, "Add this text"]
// але якщо ми виводимо в консоль тип останнього додатного елемента, то TS віведет помилку:
console.log(typeof fixed[2]) // Tuple type '[string, number]' of length '2' has no element at index '2'.


//TS може також і розширити кортеж:
let tuple: [string, ...number[]];
tuple = ['hello', 42, 100, 200];

let newTuple: [string, number, ...string[]];
newTuple = ["red", 15, "blue", "home"];



// enum, это специальный тип, который позволяет задавать **набор связанных значений** с понятными именами. TypeScript сам присваивает числовые значения (по умолчанию с 0).
enum Color {
  Red,
  Green,
  Blue
}
console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2

//Можно задать свои значения:  
  enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
  }
  console.log(Status.NotFound); // 404

 // const enum — облегчённая версия
const enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up); // 0 const enum` полностью исчезает при компиляции!  



// Union Type у TypeScript дозволяє вказати, що значенням може бути один із кількох типів:
let mixedType: string | number | boolean;
mixedType = 'string'; // OK
mixedType = 10; // OK
mixedType = true; // OK

//Union Type працює не лише з базовими типами, а й з об'єктами:
type Dog = { 
  legs: 4;
  bark: () => void;
}

type Fish = {
  fins: 2;
  swim: () => void;
}

let pet: Dog | Fish; // може бути або об'єктом типу Dog, або об'єктом типу Fish.



// Intersection type є способом об'єднання декількох типів в один. Це дозволяє створювати складні типи, комбінуючи прості
type Employee = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee[];
};

type CEO = Employee & Manager;

const newObject: CEO = {
  name: 'Alice',
  id: 1,
  employees: [
    {
      name: 'Bob',
      id: 2,
    },
  ],
};



// Literal Type — це тип, що набуває конкретного значення. З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.
type OneOrTwo = 1 | "red";
let value: OneOrTwo;
value = 1; // OK
value = "red"; // OK
value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.
