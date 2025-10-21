// // pert 8: String Literal, Arrow function, Default Parameter

// // 1. string literal 
// let fullName = "John Doe";
// let age = 30;
// let address = "Manado";

// // halo nama saya, umur saya, dan saya tinggal di 
// // cara lama
//     let kalimat = "Hallo, nama saya " + fullName + ", " + 
//     "umur saya " + age + ", " + 
//     "dan saya tinggal di " + address + ".";
// console.log(kalimat)
// // cara baru ES6 - string literal pakai backtick (disebelah angka 1)
// let kalimat2 = `Halo, nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`;
// console.log(kalimat2)

// // 2. arrow function - secara implisit/langsung sudah di return otomatis tanpa harus console 
// function sayGreetings(fullName) {
//     return `Hello, my name is ${fullName}`;
// }
// console.log(sayGreetings("John Doe"));

// ES6
// const sayGreetings2 = (fullName) => {
//     return `Hello, my name is ${fullName}`;
// }
// console.log(sayGreetings2("John Doe"));
// ES6 implicit return - return nilai tanpa ada deklarasi var
// const sayGreetings2 = (fullName) => `Hello, my name is ${fullName}`;
// console.log(sayGreetings2("John Doe"));


// // arrow function pada callback 
let numbers = [1,2,3,4,5];
let output = numbers.map((item) => item +1);
console.log(output) 
// arrow pada IIFE 
let output2 = (() => `Hello` )();
console.log(output2) 

// 3. default 
// const sayGreetings = (fullName, age, address) => {
//   if (fullName === undefined) {
//     fullName = "John Doe";
//   }
//   if (age === undefined) {
//     age = 30;
//   }
//   if (address === undefined) {
//     address = "Manado";
//   }
//   return `Halo, nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}`;
// };

// console.log(sayGreetings("Bob", 35, "airmadidi"));

// const sayGreetings2 = (fullName = "John Doe", age = 30, address = "Manado") =>
//   `Halo, nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}`;

// console.log(sayGreetings2());

// let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
// let index = countries.findIndex(country => country === "Indonesia");
// console.log(index); 
// console.log(countries[index]);