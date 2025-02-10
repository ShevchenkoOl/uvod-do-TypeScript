let age: number = 50;
let nam: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback: (a:  number) => number = (a) => { return 100 + a }; // в callback можна явно указать тип, чтоби TS знал какой тип должна вернуть функція
// или сокращенный варіант
let callback2 = (a:  number): number => { return 100 + a };



let anything: any = -20;
anything = 'Text';
anything = {};



// более безопаснее чем any но перед присваиванием переменной с типом unknow мы должны произвести проверку
let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string'){ // проверяем через условие if
str = some;
}
// второй способ более опасный
str = some as string;





// концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом
let person: [string, number] = ['Max', 21];



// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)?
let zminna: string| number = 15;


// І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
type vybor = 'enable' | 'disable'; // створюемо тип vybor
let a: vybor; // для змінної а присвоюємо тип vybor
a = 'enable';
a = 'disable';


// визначаємо типи для параметрів та ресултата функції
function showMessage(message: string): string { // якщо ми очікуємо 'undefined', 'void', nor 'any' тоді return не потрібні в іншому випадку обовязковий 
    console.log(message);
    return message;
}

function calc(num1: number, num2: number):number {
  return num1 + num2;
}

function customError(): unknown {
   throw new Error('Error');
}



// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
enum Weekday {  // створюємо список enum, щоб задати список можливих значень 
  Monday,       // якщо ми не здали додаткові параметри то enum автоматично присвоює числа від 0 до 6
  Tuesday,      // до днів тижня ми звертаємося: Weekday.Monday, Weekday.Tuesday ......
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
const isWeekend = (day: Weekday): boolean => {
return day === Weekday.Saturday || day === Weekday.Sunday;
}

console.log(isWeekend(Weekday.Monday))  // false
console.log(isWeekend(Weekday.Sunday))  // true
console.log(isWeekend(6)) // true







// Створіть тип "Gender", використовуючи union type, який може містити значення "male", "female". Створіть змінну myGender цього типу.
type Gender = 'male' | 'female';

let myGender: Gender;

myGender = 'male' // ok
myGender = 'female' // ok
myGender = 'other' // Error, type '"other"' is not assignable to type 'Gender'.







// Створіть новий тип даних, який підходить для цих двох об'єктів.
type newData = {
  title: string,
  likes: number,
  status: string,
  accounts: string[],
  details?: {          // вказує на те що об'єкт details не обов'язковий
    createAt: Date,
    updateAt: Date
  }
}

const page1: newData = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: newData = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}




// функція getPromise(), яка повертає проміс, в масив, що містить рядки та числа.
function getPromise(): Promise<(string|number)[]> {
    return new Promise((resolve) => {
           resolve(['Text', 50]);
  });
}
getPromise().then((data) => {
  console.log(data);
});






//  розглянемо ситуацію, де ми хочемо написати функцію, що отримує список користувачів та повертає імена цих користувачів у вигляді рядка. Ось як ми можемо типізувати таку функцію:
type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let result = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']




let myFunc: (firstArg: string, secondArg: number) => void;  // У цьому прикладі myFunc визначено як функцію, яка приймає два аргументи: рядок і число, і нічого не повертає (void). Потім ми присвоюємо функцію, що відповідає цьому типу функції, змінній myFunc.

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"
