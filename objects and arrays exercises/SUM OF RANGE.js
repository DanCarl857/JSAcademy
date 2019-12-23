
// range function 
    let rangearray = [];

    function range(start,end) {
        for(i = 0; start <= end ;i++){
            rangearray[i] = start;
            rangearray.push(start);
            start++;

        }
    
        return rangearray;
        
    }
    console.log(range(3,9));

//Sum function 

let result = 0;

function SUM(rangearray){
    for(i = 0; i < rangearray.length; i++){
        result = rangearray[i] + result;
    }
    return result; 
}
console.log(SUM(rangearray(3,9)));

//modified range function that takes an optional third argument  I tried two methods 

//method 1
function bonus(rangearray,step){
    console.log(rangearray);
    let total = [];
   for (let value of rangearray){
      // let total = [];
   newvalue =  value + step 
    total.push(newvalue);
   }
   return total; 
}


//method 2
function bonnus(rangearray,step){
    let totally = [];
    for( i = 0; i < rangearray.length; i+step){
        //rangearray[i] + 2;
        newman = i + step;
        totally.push(newman);

    }
    return totally;
}
