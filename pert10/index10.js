// pert 10: Distructuring & Module 
// 1. Distructuring/de-strukturisasi - proses ambil tiap elemen dlm array dan menyimpannya ke variable terpisah 

const numbers = [1,2,3,4,5]; //structuring/strukturisasi - kebalikan destrukturisasi
// destrukturisasi - proses ambil tiap elemen dlm array dan menyimpannya ke variable terpisah 
// let nu1 = numbers[0];
// let nu1 = numbers[1];
// let nu1 = numbers[2];
// console.log(nu1)

// ES 6 
// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1, num2, num3, num4, num5);
// - distructuring sebagian item 
// const [, , num3, , num5] = numbers; // koma harus ada
// console.log(num3, num5);
// distructuring dgn rest parameter
const [num1, num2, ...rest] = numbers; // sisanya disimpan di rest 
console.log(num1, num2, rest);


// destructuring objek 
// const student = { 
//     fullName: "john", 
//     age: 25, 
//     stat: "active", 
// };

// const {fullName, age, stat} = student; 
// console.log(fullName, age, stat);
// // array diidentifiikasi berdasarkan indeks, objek dgn property 
// console.log(age);

// rest pd objek
// const {fullName, ...rest} = student;
// console.log(fullName, age);

// mini exercise 
//1
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(object){
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(object.firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(object.firstName + ' is already retired.');
// 	}
// }
// yearUntilRetirement({year: 1987, firstName: 'John'});
//3.

// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });
// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });
// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);


//Module
import { student as mahasiswa, angka } from "./data.js";
import ucapkanSalam from "./sayGreetings.js";

console.log(mahasiswa);
console.log(angka);
ucapkanSalam();