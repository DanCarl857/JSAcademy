for(num = 1; num <= 100; num++){
	if(num%3==0){
    	console.log("Fizz");	
    }
  	else if((num % 5 == 0) && (num % 3 != 0)){
    	console.log("Buzz");
    } else {
    	console.log(num);
    }
}

// This second part is for the version 
//two of the FizzBuzz exercise.


/*

for(num = 1; num <= 100; num++){
	if((num % 3 == 0) && (num % 5 == 0)){
    	console.log("FizzBuzz");
      }
  	else if((num % 5 == 0) && (num % 3 != 0)){
    	console.log("Buzz");
      } 
  	else if(num % 3 == 0){
    	console.log("Fizz");
    }
  	else {
    	console.log(num);
    }
}

*/