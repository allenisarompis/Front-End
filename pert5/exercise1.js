// Hitung BMI (exercise sebelumnya) dengan menggunakan 
// 1. IIFE function 

(function(bb, tb) {
    let bmi = bb / (tb * tb);
    console.log("BMI:", bmi.toFixed(2));
})(56, 1.74);  

// 2. Callback function 
function hitBMI(bb, tb, callback) {
  let bmi = bb / (tb * tb);
  return callback(bmi);
}

let output = hitBMI(56, 1.74, function (nilaiBMI) {
  return "Nilai BMI: " + nilaiBMI.toFixed(2);
});

console.log(output);


