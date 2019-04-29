// The sum of a range
// The below code is equivalent to "console.log(sum(range(1, 10)));"

function range(start, end){
    let allNum = [];
    for(let i = start; i <= end; i++){
        allNum.push(i);
    }
  console.log(allNum);
}





// The sum of numbers in an array

function sum(value) {
    var sum = 0;
    for (var i in value) {
        sum = sum + value[i];
    }
    return console.log(sum);
}





// This one is with the addition of a third element for the step

function range(start, end, step){
    let allNum = [];
    for(let i = start; i <= end; i = i + step){
        allNum.push(i);
    }
  console.log(allNum);
}

range(5, 13, 5);