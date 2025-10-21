// pert 6: array & object in js 
// tanpa array 
// let student1 = "John"
// let student2 = "bob"
// let student3 = "doe" 

// // cara 1. array literal
let students = ["John", "bob", "doe", "jane", "jacob"]
// array di js dpe data type bole beda2 
// let john = ["John", 30, true];

// // cara 2 pakai kata kunci "new"
// // let employees = new Array("John", "bob", "doe", "jane", "jacob");

// console.log(students); 
// students[1] = "Edgar"; // ganti john dengan edgar 
// console.log(students[1]); //akses elemen dengan indeks
// console.log(students.length); // tampilkan length

// console.log(students[students.length - 1]);

// //array method
// let array = [1,2,3, "Hello", false, true];
// //1. tostring - ubah jadi string 
// console.log(array.toString());
// //2. join - gabung array
// console.log(array.join(" "))
// console.log(array.join("#"))
// //3. pop -- hapus elemen trakhir 
// array.pop();
// console.log(array);
// //4. push -- tambah elemen trakhir 
// array.push("Selamat pagi");
// console.log(array);
// //5. shift - hapus elemen pertama 
// array.shift();
// console.log(array);
// //6. unshift - tambah elemen pertama 
// array.unshift("selamat siang");
// console.log(array);
// //7. splice - kalau tambah elemen di tengah 
// console.log("splice")
// array.splice(3, 0, 4, 5); 
// console.log(array);
// //8. slice -- potong  
// console.log("slice")
// let numbers = array.slice(1, 5);
// console.log(numbers);
// //9. concat 
// let num = [1, 2, 3];
// let string = ["a", "b", "c"];
// let combine = num.concat(string);
// console.log(combine)


// object 
// cara deklarasi 
// beda dengan array: object ada properti dan value(nilai)
let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [90, 80, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },
  sayHello: function () {
    console.log("Hello World");
  },
};

console.log(johnObj);
console.log(johnObj.address.street) 
console.log(johnObj.grade[1]);

//Cara akses element dlm object
// //Cara 1. Dot notation
console.log(johnObj.fullName);
johnObj.sayHello();
console.log(johnObj.address.street);
console.log(johnObj.grade[1]);
//Cara 2. Bracket notation
console.log(johnObj["fullName"]);
console.log(johnObj["grade"][1]); //array index
console.log(johnObj["address"]["street"]); //nested object
johnObj["sayHello"](); //function

johnObj.job = "Programmer";
console.log(johnObj);

// delete property 
delete johnObj.isActive;
console.log(johnObj);