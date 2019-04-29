

function isEven(value) {
    if (value == 0) {
        console.log("the number is even");
    }
    else if (value == 1) {
        console.log("the value is odd");
    }
    else {
        return isEven(value - 2);
    }
}
var value = Number(prompt("Enter a value", ""));
isEven(value);

// The recursion fix

/*
function isEven(value) {
    if (value == 0) {
        console.log("the number is even");
    }
    else if (value == 1) {
        console.log("the value is odd");
    }
    else {
        //to fix the problem ,we multiplie (value -2)by -1 before pass it to to the function isEven
        var new_value = value - 2;

        if (new_value < 0) {
            new_value = new_value * (-1);
        }

        return isEven(new_value);
    }
}
var value = Number(prompt("Enter a value", ""));
isEven(value);
*/
