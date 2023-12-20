// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;
const Id= setInterval(
 ()=>{
    counter++
   console.log(counter);
   ;
 }
,1000)
console.log("started")
setTimeout(()=>clearInterval(Id),10000);// to stop the counter within certain timw period