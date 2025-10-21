// import index.js
import ambilDataUser from "./ambilDataUser.js";

ambilDataUser();

// 1. Mengapa kita butuh .json() setelah fetch()?
// Karena .json() dipakai mengubah response menjadi JavaScript object agar bisa diakses.

// 2. Jika API gagal merespons, bagaimana cara menambahkan error handling?
// Dengan .catch(error => { ... }) pada promise chaining, 
// atau dengan try...catch jika menggunakan async/await.