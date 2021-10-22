//import the mymodule from logging folder and myLogModule from the logging folder. 
const mymodule = require('./logging/mymodule');
const myLogModule = require('./logging/logging');

//log the title inside mymodule
console.log("The title inside the module is ", mymodule.title);

//use the calculate function 
mymodule.cal(5,2);

//log some information to the terminal using the myLogModule
myLogModule.info("Node.js started... " + mymodule.title);
myLogModule.warning("Node.js has a warning... " + mymodule.title);
myLogModule.error("Node.js has an error... " + mymodule.title);

const interval = setInterval(()=> {
    myLogModule.info("Processing stuff for you...")
}, 5000)

