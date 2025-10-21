// // pert 11: asynchronus 

// // synchronus/single thread/blocking - kode program yg terjadi dalam 1 thread 
// // blocking krn semua kode harus jalan (menunggu semuanya jalan)
// // console.log("proses 1")
// // console.log("proses 2") //akan terblock jika proses lama 
// // console.log("proses 3") //proses 4 takkan berjalan jika blocking 

// // asynchronus/multi thread/nonblock
// // console.log("asynchronus")
// // console.log("proses 1");
// // console.log("proses 2"); 
// // setTimeout(() => {
// //     console.log("proses 3, setelah 3 detik");  
// // }, 3000);
// // console.log("proses 4");

// //2 jenis asynchronus - mekanisme beda: start sama, stop beda
// // 1. pararel
// // console.log("asynchronus pararel")
// // setTimeout(() => {
// //     console.log("proses 1, setelah 2 detik");  
// // }, 2000);
// // setTimeout(() => {
// //     console.log("proses 2, setelah 4 detik");  
// // }, 4000);
// // setTimeout(() => {
// //     console.log("proses 3, setelah 3 detik");  
// // }, 3000);
// // setTimeout(() => {
// //     console.log("proses 4, setelah 1 detik");  
// // }, 1000);
// // di FE lebih cocok concurrent, jika pararel akan ada race condition

// //2. concurrent: berjalan berurtan tapi tak di block 
// // console.log("asynchronus concurrent ES5")
// // ES 5: CALLBACK - callback hell, hard to maintain 
// // setTimeout(() => {
// //     console.log("proses 3, setelah 3 detik");  
// //     setTimeout(() => {
// //         console.log("proses 3, setelah 3 detik");  
// //         setTimeout(() => {
// //             console.log("proses 3, setelah 3 detik");  
// //         }, 3000);
// //     }, 3000);
// // }, 3000);

// // ES 6: promise 
// console.log("asynchronus concurrent ES6");
let condition = true;
const newPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("berhasil");
    } else {
        reject("Gagal"); 
    }
});
// // cara panggil/cara pakai promise ada 2 
// // 1, then - catche
// // newPromise.then( result => {
// //     console.log(result);
// }); 

// newPromise
//     .then((result) => `${result} !!!`) //Proses 1
//     .then((result2) => console.log(result2)) //Proses 2
//     .catch((error) => console.log(error));

// // 2. asyincawait(?) muncul di ES8 
// // buat dalam func
// const getPromise = async () => {
//   try {
//     const result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getPromise();

// // simulasi fetch data API json placeholder (ambil data dari API?) 
// // then-catch
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error: ", error);
    }
}
// // asyncawait
// // async function getUsers() {
// //   try {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.error("Error:", error);
// //   }
// // }


// const getDataJSON = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await response.json();
//   json.forEach(({ name }) => console.log(name));
// };

// getDataJSON();
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json))