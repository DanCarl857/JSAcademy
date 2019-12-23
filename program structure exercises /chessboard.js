let size = 8;
let board = "";

for(let y = 0;y < size; y++){
    for(x = 0; x < size; x++) {
        if(( x + y)%2 == 0){
            board +="#";
        }else{
            board +=" ";
        }
    } 

board += "\n";

} 
console.log(board);