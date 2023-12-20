// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require ('fs')
const fileDir = './4-write-to-file.md';
fs.readFile(fileDir,"utf-8",(err, data)=>{
    if(err===null){
    fs.writeFile(fileDir,data+'\n'+ "hi this is writing on this file by ram",(err)=>{
         if(err)
         console.log(err)
       })
    }
}
 )
