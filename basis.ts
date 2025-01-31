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
