/** Вариант 1*/
/** Задание 2 */
declare let someArrowFunc: (n1: string, n2: string) => string;
declare const resArrowFunc: string;
/** Задание 3 */
declare let age: number;
declare const names: string;
declare let isAdmin: boolean;
declare const hobbies: string[];
declare let user: {
    name: string;
    age: number;
    isAdmin: boolean;
};
declare const tuple: [string, number];
declare let randomValue: any;
declare const nullableValue: null | undefined;
/** Задание 4 */
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
