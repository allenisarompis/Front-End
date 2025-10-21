// // Javascript function IFFE & CALLBACK  
// 1. IIFE - immediately invoked function expression atau self executing anonymous function, 
// fungsi jalan otomatis 

// tanpa parameter
// (function (){
//     console.log("Hello");
// })(); // di dlm kurung = anonymous diluar kurung self execute 

// ada parameter fullname sbgi local parameter
// (function (fullName){
//     console.log("Hello " + fullName);
// })("John doe");

//With parameter & return value
// let output = (function (fullName) {
//   return "Hello " + fullName;
// })("John Doe");
// console.log(output);

// 2. Callback function, function yg di pass ke another function as argumen 
function greetings(callback){
    callback(); 
} // outer function 
// func as args must be anonymous 
greetings(function (){
    console.log("Hello callback");
}); // callback adalah yang didalam kurung greetings 

//Callback function with parameter & return value
function greetings(callback) {
  let output = callback("John Doe");
  return output;
}
//Function as args must be an anonymous function
let output2 = greetings(function (fullName) {
  return "Hello " + fullName;
});

console.log(output2);

// exercise 1 
// modif mini exercise sebelumnya - BMI, modif dengan 1. IIFE dan 2. callback
 

