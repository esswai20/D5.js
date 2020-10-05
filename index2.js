// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
let Dice = Math.floor(Math.random() * 7)

console.log(Dice)

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
function WhoIsBiger(a,b) {
  if(a>b){
    console.log(`A is bigger with value ${a} `)
    return `and difference of: ${a-b}`
  }else if(b>a){
   
    console.log(`B is bigger with value ${b}`)
    return `and difference of: ${b-a}`
  }else{
   
    console.log(`A and B are equal`)
    return `The differnece betwen a and b is :${a-b}`;
  }
 
}
console.log(WhoIsBiger(15,5))
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const str = "I love coding"
const words = str.split(' ')
//let splitedArray = []
//splitedArray.push(words)
console.log( words)