// pert 7: JS conditional and loop 
// 1. js traditional 
// if else
//  let suhu = 23 // dalam celcius
//  if (suhu >= 38){
//     console.log("Suhu diluar panas")
//  } else { 
//     console.log("Suhu diluar normal")
//  }
// console.log("Selesai")

// if else if else 
// let umur = 19;
// if (umur >= 0 && umur <= 5) {
//   console.log("Umur termasuk kategori balita");
// } else if (umur >= 6 && umur <= 11) {
//   console.log("Umur termasuk kategori anak-anak");
// } else if (umur >= 12 && umur <= 17) {
//   console.log("Umur termasuk kategori remaja");
// } else if (umur >= 18 && umur <= 23) {
//   console.log("Umur termasuk kategori anak muda");
// } else if (umur >= 24 && umur <= 40) {
//   console.log("Umur termasuk kategori dewasa");
// } else if (umur >= 41) {
//   console.log("Umur termasuk kategori orang tua");
// } else {
//   console.log("Tidak dalam range umur");
// }

// switch - case: tidak bisa dalam bentuk range, harus dengan value yg pasti
// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//     case "senin":
//         seragamSekolah = "kemeja putih bawahan merah";
//     case "selasa":
//         seragamSekolah = "kemeja hijau bawahan hitam";
//     case "rabu":
//         seragamSekolah = "kemeja putih bawahan putih";
//         break;
//     case "kamis":
//         seragamSekolah = "kemeja batik merah bawahan hitam";
//         break;
//     case "jumat":
//         seragamSekolah = "baju pramuka";
//         break;
//     case "sabtu":
//         seragamSekolah = "baju bebas";
//     case "sabtu":
//         seragamSekolah = "baju bebas";
//     case "minggu":
//         seragamSekolah = "baju bebas";
//     default:
//         console.log("Pilihan tidak valid")
// }
// console.log(seragamSekolah);

// atau sma saja dgn
// let hari = 5;
// switch (hari) {
//   case 1: // sama saja dengan if (hari === 1)
//     console.log("hari minggu");
//     break;
//   case 2:
//     console.log("hari senin");
//     break;
//   case 3:
//     console.log("hari selasa");
//     break;
//   case 4:
//     console.log("hari rabu");
//     break;
//   case 5:
//     console.log("hari kamis");
//     break;
//   case 6:
//     console.log("hari jumat");
//     break;
//   case 7:
//     console.log("hari sabtu");
//     break;
//   default:
//     console.log("out of range");
//     break;
// }

// 2. JS loop 
// 1. loop for 
// for (let i=0; i <= 10; i++){
//     console.log(i);
// } // eksekusi console log sesuai kondisi i <= 10 

// 2. while loop 
// let i = 1; 
// whle (i <= 10) {
//     console.log(i);
//     i++ // merubah kondisi
// }

// 3. do while 
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// array built-in method
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); //tampilkan sekaligus
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]); //menampilkan isi array satu per satu
// }

//1. forEach
// numbers.forEach(function (value) {
//   console.log(value);
// });

// 2.map
// map bisa return, beri nilai baru menggantikan nilai variable pertama, dia disimpan ke array 
let output = numbers.map(function (value) {
  return value + 2;
});
console.log(output);

// 3. filter 
// map dan filter sama2 bisa return, tapi filter bisa mencari 
let filter = numbers.filter(function (value) {
  return value > 2;
});
console.log(filter);

// 4. find()
// kalau filter mengembalikan semua item, kalau find hanya mengembalikan item pertama 
let find = numbers.find(function (value) {
  return value > 2;
});
console.log(find);