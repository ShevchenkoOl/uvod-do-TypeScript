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
