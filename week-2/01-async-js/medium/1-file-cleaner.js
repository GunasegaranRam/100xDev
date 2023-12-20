// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require ('fs')
const fileDir = './1-file-cleaner.md';

fs.readFile(fileDir,"utf-8",(err, data)=>{
 if(err===null)

 fs.writeFile(fileDir, data.replaceAll(/\s+/g," "),(err)=>{
    if(err)
    console.log(err)
  })
})