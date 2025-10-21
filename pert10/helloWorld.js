function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve("Hello World!");
    }, 2000); // 2 detik
  });
}

helloWorld().then((result) => {
  console.log(result);
});

// export 
export default helloWorld;
