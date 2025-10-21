// // Javascript function tdk lengkap 

// // 2. cara deklarasi fungsi di js 
// call function
// function greetings(){
//     console.log("hello world!")
// }
// greetings() 

// 2. function expression
let greetings2 = function() {
    console.log("Hello World 2")
};
greetings2()

// func with return value (output) and arg (input)
// Cara 1
//                 parameter
// function greetings(fullName){
//     return "Hello " + fullName
// }
// //.        argument
// let output = greetings("John Doe")
// console.log(output)

// // cara 2 func dalam const
// const greetings2 = function (fullName){
//     return "Hello " + fullName
// }
// let output2 = greetings2("John Doe")
// console.log(output2)

//Global, Local, Block Scope Variable
let x = 10 //Global Variable
console.log(x) //10
function func1(){
    let y = 20 //Local Variable
    console.log(x) //10
    console.log(y) //20
    if(true){
        let z = 30 //Block Variable
        console.log(x) //10
        console.log(y) //20
        console.log(z) //30
    }
    // console.log(z) // Error
}
// console.log(y) //Error
func1()

// global diluar, bisa dipanggil, 
// local- didlm func 
// blok variable, di if pda func 
// klo var bisa smua pakai 

// function BMI(){
//     let bb = 56
//     let tb = 1.7 
//     return bb / (tb * tb)  
// }
// console.log(BMI())

// function hitBMI(bb, tb){
//     return bb / (tb * tb)
// }
// let BMI = hitBMI(56, 1.74)
// let kategori = BMI > 25 ? "kelebihan bb" : "normal bb"
// console.log(kategori)
