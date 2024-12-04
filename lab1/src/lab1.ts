                /** Вариант 1*/
/** Задание 2 */
let someArrowFunc = (n1: string, n2: string) => {
    return  n1 + n2;
};
const resArrowFunc = someArrowFunc("1", "2");
console.log(resArrowFunc);
/** Задание 3 */
let age: number = 30;

const names: string = "Alice";

let isAdmin: boolean = false;

const hobbies: string[] = ["Reading", "Traveling", "Cooking"];

let user: { name: string; age: number; isAdmin: boolean } = {
    name: "Bob",
    age: 25,
    isAdmin: true,
};

const tuple: [string, number] = ["Alice", 30];

let randomValue: any = "Hello"; 
randomValue = 42;               

const nullableValue: null | undefined = null; 
/** Задание 4 */
interface Entity {
    id: number;
    }
    interface ToJsonStringify extends
    Entity {
    name: string;
    surname?: string;
    }
    const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
    }
    
const jsonString = JSON.stringify(data);

console.log(jsonString);
