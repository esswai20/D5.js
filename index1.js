//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
let test = "String"
console.log(test)

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
let sum = 10 + 20
console.log(sum)

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
let random = Math.floor(Math.random() *21)

console.log(random)
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
let me ={
  name: "Sheye ",
  surname: "Banmeke",
  age: "39",
}
console.log(me)
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
delete me.age
console.log(me)
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

