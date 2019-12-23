function isEven(c){
    if (c % 2 == 0) {
        return true;
    }
    else if(c % 2 !== 0 ) {
        return false
    }
    else{
        return isEven(n - 2);
    }
}