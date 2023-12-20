// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let counter = 0;
const Id= setInterval(
 ()=>{
    const time = new Date();
    let Hour = time.getHours();
    let Minute = time.getMinutes();
    let Second = time.getSeconds();
    let amPM ='AM';

    if(Hour>12){
      Hour-=12;
      amPM='PM';
      if(Hour<10)
        Hour = '0' + Hour;
    }
    if(Minute<10)
    Minute = '0' + Minute;
    if(Second<10)
    Second = '0' + Second;
    console.log(`${Hour}:${Minute}:${Second} ${amPM}`)
   ;
 }
,1000)

