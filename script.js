// 1) Quali sono i tipi primitivi principali in TypeScript?
// i tipi primitivi principali di TS ne sono 3
// Boolean(vero o falso)
// number(valori numerici)
// string(valori di testo tipo: "Hello world!")
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
// let string: string = "Tino";
// let age: number = 27;
// let studyTypescript: boolean = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
// const greet = (name: string) => {
//   return "ciao" + name;
// };
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
// Il ritorno di questa funzione è di tipo numerico.
// nel caso non bastasse come risposta l'ho richiamato ======> sum(20, 23);
// Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
// const getPrice = (num: number, iva: number) => {
//   return (num * iva) / 100;
// };
// console.log(getPrice(100, 22));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
// const conCatString = (str1: string, str2: string) => {
//   let string = str1;
//   let string2 = str2;
//   let result = string.concat(string2).length;
//   return result;
// };
// console.log(conCatString("ciao ", "epicoder"));
// 7) Cos'è un Type Union e come si scrive?
// Permette di assegnare a una variabile tipi diversi tra cui scegliere, ma diventa più stringente sulle condizioni che possiamo dare alle nostre varibili,
// in questo caso alla mia variabile ID non potrò assegnargli delle operazioni che sono esclusivamente per string o per number, quindi se dovessi assegnargli un concat() o un isInteger() per number mi darebbe un errore
// ESEMPIO DI COME SI SCRIVE
// let ID: string | number;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
// let generic: number | null | undefined;
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
// type daysOfWeek =
//   | "Lunedì"
//   | "Martedì"
//   | "Mercoledì"
//   | "Giovedì "
//   | "Venerdì"
//   | "Sabato"
//   | "Domenica";
//  10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
// const numbers: number[] = [1, 2, 3];
// const numbers: Array<Number> = [1, 2, 3];
// 11)  Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// const tuple: [string, string, string, number, number] = [
//   "ciao",
//   "a",
//   "tutti",
//   1,
//   2,
// ];
// const a = tuple["ciao"];
// const b = tuple["a"];
// const c = tuple["tutti"];
// const d = tuple[1];
// const e = tuple[2];
// 12)  Qual è la differenza tra type e interface?
// La differenza tra type e interface e che le interface con lo stesso nome verranno unite e questo significa che si utilizza un'interfaccia
// invece i tipi non possono essere estesi ma sono più flessibili per comporre tipi complessi
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// interface Person {
//   firstname: string;
//   lastname: string;
//   age: number;
// }
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// interface User {
//   email: string;
//   phone?: number | string;
// }
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// interface Student {
//   name: string;
//   vote: number;
// }
// const students: Student[] = [
//   { name: "Paperino", vote: 28 },
//   { name: "Pippo", vote: 25 },
//   { name: "Topolino", vote: 30 },
// ];
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// interface Veicolo {
//   model: string;
//   year: number;
//   isElectric: boolean;
// }
// interface Auto extends Veicolo {
//   brand: string;
//   color: string;
// }
// 17)  Crea un oggetto che implementi l'interfaccia Auto.
// const myCar: Auto = {
//   model: "Model Y",
//   year: 2024,
//   isElectric: true,
//   brand: "tesla",
//   color: "white",
// };
// 18) Cosa sono i Generics in TypeScript?
// Sono parametri di tipo che permette di non forzare il tipo di un dato all'interno dell'interfaccia.
// 19) È possibile avere più tipi generici in un'interfaccia?
// Si è possibile avere più tipi generici in un'interfaccia, ESEMPIO: interface User <T, U> {first: T; second:U;}
// 20) Crea un'interfaccia generica per una risposta API.
// interface Todo {
//   id: string;
//   title: string;
//   completed: boolean;
//   createdAt: number;
// }
// interface ResponseData {
//   message: string;
//   data: Todo[];
// }
