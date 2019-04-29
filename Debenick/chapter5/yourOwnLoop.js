function loop(value, test, update, body){
	for (let i = value; i > 0; i--){
    	if (!test(i)){
        	return i;
        }
      body(i);
    }
}