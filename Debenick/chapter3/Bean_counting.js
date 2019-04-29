var count = 0;
function countBs(value) {

    for (var i = 0; i < value.length; i++) {

        if (value.charAt(i) === "B") {
            count++;
        }
    }
    return console.log("the occurence of \"B\" is : " + count);
}

var value = prompt("Enter a string ", "");
countBs(value);

// Bean counting modification 

/*
function countBs(value,char) {
            
    for (var i = 0; i < value.length; i++) {

        if (value.charAt(i) === char) {
           count ++;
        } 
    }
    return console.log("the occurence of " +char+ " is : " + count);
}

var value = prompt("Enter a string ", "");
var char = prompt("Enter a character","").charAt(0);
countBs(value,char);
*/