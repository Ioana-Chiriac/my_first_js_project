let age = 31;
let years = 5;
console.log(age);
age = 36;
console.log(age);

let name = 'David';
console.log('name: ');


// operatori date numerice

let firstNumber = 10;
firstNumber = 12;

let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}`);

// scadere
let pastAge = age - years;
console.log(`Acum ${years} ani aveam varsta de ${pastAge}`);
console.log(`Acum ${years} ani aveam varsta de ${age - years}`);

// inmultire 

let numberC = 25;
let numberD = 10;
let divisionResult = numberC / numberD;
console.log(`${numberC} impartit la ${numberD} rezulta ${divisionResult}`);

// cum aflam cel mai mare numar de tip numar
console.log(Number.MAX_SAFE_INTEGER);

// mic la fel ca sus doar cu min

// numere de BigInt
let bigIntNumber = 124976576546434n;
console.log(`BigInt value is ${bigIntNumber}`);

// string operation
const myName = 'David Bacter';
console.log(`my name is ${myName}`);

// afisarea unui caracter de la o propozitie 
// primul caracter
const firstCharInName = myName[0];

// lungimea sirului
const myNameLenght = myName.length;

// ultimul caracter din string 

let lasCharIndex = myNameLenght - 1;
let lastChar = myName[lasCharIndex];
console.log(`ultimul caracter din sir este ${lastChar}`);

// verifiacer numar par/impar 

let checkdNumer = 21
let remainder = checkdNumer % 2;
let isEven = remainder === 0;
console.log(`number ${checkdNumer} is even ${isEven}`);
console.log(`${remainder}`);
