// pert 9
// 1. rest paremeter

//  bekaitan dgn kita buat func
// const func1 = (para1, para2, para3) => {
//     let result = para1 + para2 + para3;
//     console.log (result);
// };

// dengan array
// const func1 = (para1, para2, para3) => {
//     let array = [para1 + para2 + para3];
//     let result = 0;
//     array.forEach((item) => (result) += (item))
//     console.log (result);
// };
// func1(1,2,3); // sesuaikan arg dengan parameter nah peran rest parameter
// rest p - simpan smua parameter ke 1 variable, tipe data = array
// rest = sisa 
// rest parameter, bisa digabung dgn parameter lain. tapi harus ada diakhir
// const func2 = (para1, para2, ...rest) => {
//     let result= 0;
//     rest.forEach((item) => (result += item));
//     console.log(result);
// }
// funct2(1,2,3,4,5,6,7,8,9,10);

//2.  spread operator - berkaitan dgn array dan objek 
const numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers) // spread - dikeluarkan dari array 

// kegunaan spread pada array 
// 1. dplikasi array 
let numbers2 = [...numbers];
numbers2.push(6);
console.log(numbers2);
// 2. menggabungkan array 
let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = [7,8,9];
// pkai concat 
let combinNum2 = [...num1, ...num2, ...num3];
console.log(combinNum2);


// kegunaan spread pda objek
// duplikasi objek
const student1 = {
    fullName: "John Doe",
    status: "active"
};
const student2 = { ...student1, address: "Manado"}; //add address
console.log(student2)

const obj1 = {a:1, b: 2};
const obj2 = {c: 3, d: 4};
const combineObj = { ...obj1, ...obj2};
console.log(combineObj);
