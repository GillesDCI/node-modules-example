//Importing the core module fs (filesystem module)
const fs = require('fs');

//declaring the data that we want to write to the file
const data = "This is the data I would like to write in my file."

//the options object
const options = {
    encoding:'utf8', //encoding is utf-8 (supports many characters)
    flag:'a'//create a new file if not exists
}

//writing the file using the parameters 
fs.writeFile('test.txt',data,options,function(){console.log("done writing the file")})



