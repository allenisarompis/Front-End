// // bagian 2
// function ambilDataUser() {
//   return fetch("https://jsonplaceholder.typicode.com/users") 
//     .then((response) => response.json()) 
//     .then((data) => {
//       data.forEach(({ username, email }) => {
//         console.log(`Username: ${username}, Email: ${email}`);
//       });
//     })
//     .catch((error) => {
//       console.error("Terjadi error:", error);
//     });
// }

// bagian 3 
// ambilDataUser.js
// ambilDataUser.js
async function ambilDataUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach(({ name, email }) => {
      console.log(`Nama: ${name}, Email: ${email}`);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

export default ambilDataUser;

// Apa perbedaan pendekatan Prom chaining dengan async/await?
// Promise chaining memakai .then() dan .catch() sehingga bisa panjang dan kurang rapi, 
// sedangkan async/await membuat kode lebih singkat, dan lebih clean sehingga mudah dibaca