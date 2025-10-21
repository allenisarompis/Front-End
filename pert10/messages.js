// import
import helloWorld from "./helloWorld.js";

async function messages() {
  const message = await helloWorld();
  console.log(message);
}

messages();


// 1. Mengapa perlu menambahkan await di dalam messages?
// Karena helloWorld() mengembalikan Promise. 
// Tanpa await, variabel message akan berisi objek Promise, bukan hasil "Hello World!".

// 2. Apa yang terjadi jika await dihapus?
// String "Hello World!", melainkan Promise

// 3. Mengapa kita perlu menggunakan export dan import di sini?
// Supaya function bisa dipakai file lain, export default di helloWorld.js membuat function dipakai di messages.js dengan import.