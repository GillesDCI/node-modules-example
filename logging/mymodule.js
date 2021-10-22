//exporting text/string information
module.exports.title = "Hello I am a title";

//exporting a function 
module.exports.cal = (number1, number2) => {
    let sum = number1 + number2;

    console.log("I am a function and the result is ", sum)
}