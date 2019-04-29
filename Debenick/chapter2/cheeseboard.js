board = "";
for(let i=0; i<8; i++){
	for(let j=0; j<8; j++){
    	if((i+j)%2 == 0){
          board += " ";
        }else{
        	board += "#";	
        }
    }
  	board += "\n";
}
console.log(board);

// Here is the version two

/*
size = 8;
board = "";
for(let i=0; i<size; i++){
	for(let j=0; j<size; j++){
    	if((i+j)%2 == 0){
          board += " ";
        }else{
        	board += "#";
        }
    }
  	board += "\n";
}
console.log(board);
*/