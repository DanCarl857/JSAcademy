
function min(value1, value2) {
    if (value1 < value2) {
        console.log("the minimun value is :" + value1);
    }
    else {
        console.log("the minimun value is :" + value2);
    }
}
var value1 = Number(prompt("enter a number", ""));
var value2 = Number(prompt("enter the second  number", ""));
min(value1, value2);