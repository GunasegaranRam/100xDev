//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
//let counter=1;
function count(counter,seconds){
setTimeout(()=>{console.log(counter++);
count(counter,seconds)} ,seconds)}

count(1,1000)

