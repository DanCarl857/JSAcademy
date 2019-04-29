function reverseArray(value){
    let new_array = [];
    for (let i in value){
        new_array.unshift(value[i]);
    }
    console.log("The reverse array is: "+value);
}

reverseArray([1,2,3,5,6,7,8,9,10]);