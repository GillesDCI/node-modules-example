//exporting an object that contains three functions for logging. 
const log = {
    info:(info) => {
        console.log("Info: " + info);
    },
    warning:(info) => {
        console.log("Warning: " + info);
    },
    error:(info) => {
        console.log("Error: " + info);
    }
}

//exporting the logic to the rest of node so we can use it there 
module.exports = log;