function array_To_List(array){
    let myList = null;
    for (let i = array.length - 1; i >= 0; i--){
        myList = {value: array[i], rest: myList};
    }
    return myList;
}

console.log(array_To_List([1,2,3]));

function list_To_Array(list){
    let array = [];
    for(let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}

console.log(list_To_Array(array_To_List([10, 20, 30])));


function prepend(value, list) {
    return {value: value, rest: list};
}

function nth(list, n) {
    if (!list)
      return undefined;
    else if (n == 0)
      return list.value;
    else
      return nth(list.rest, n - 1);
  }

