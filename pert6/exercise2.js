// exercise 2 - Allenisa Rompis
// Array Exercises
let people = ["Greg", "Mary", "Devon", "James"];

//1. Using a for-loop, iterate through this array and console.log all of the people.
console.log("1. ");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]); 
};

//2. Using a forEach(),  iterate through this array and console.log all of the people.
console.log("2. ");
people.forEach(function (data) { 
    console.log(data)
});

//3. Write the command to remove "Greg" from the array. 
console.log("3. ");
people.shift(); // to remove the first elemen use shift
console.log(people);

//4. Write the command to remove "James" from the array. 
console.log("4. ");
people.pop(); // to remove the last elemen use pop
console.log(people);

//5. Write the command to add "Matt" to the front of the array.
console.log("5. ");
people.unshift("Matt"); // to add the first elemen use unshift
console.log(people);

//6. Write the command to add your name to the end of the array.
console.log("6. ");
people.push("Allenisa"); // to add the last elemen use push
console.log(people);

//7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
console.log("7. ");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]); // people[i] to akses index
  if (people[i] === "Mary") {
    break;
  }
};

//8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// let people = ["Matt", "Mary", "Devon", "Allenisa"];
console.log("8. ");
let copyPeople = people.slice(2); // to remove the first and second elemen
console.log(copyPeople);

//9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
// Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
console.log("9. ");
let redPpl = ["Matt", "Marry", "Devon", "Allenisa"];
console.log(redPpl);
redPpl.splice(2, 1, "Elizabeth", "Artie");
console.log(redPpl);

//10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
// Final Result =  ["Matt", "Mary", "Elizabeth", "Artie", "Your Name", "Bob"].
console.log("10. ")
// let redPpl = ['Matt', 'Marry', 'Elizabeth', 'Artie', 'Allenisa'];
console.log("10. ");
let withBob = redPpl.concat("Bob"); // use concat to combine
console.log(withBob);

// Object Exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. Write the command to add the language "Go" to the end of the languages array.
console.log("1. ");
programming.languages.push ("Go"); // use go bcz languages is an array inside the object 
console.log(programming);

//2. By using the bracket notation, change the difficulty to the value of 7.
console.log("2. ");
programming["difficulty"] = 7; 
console.log(programming);

//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
console.log("3. ");
delete programming.jokes;
console.log(programming);

//4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
console.log("4. ");
programming.isFun = true; 
console.log(programming);

//5. Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output. 
console.log("5. ");
let langIndex = programming.languages.map(function (lang, index){
    return index + "-" + lang
});
console.log(langIndex);

