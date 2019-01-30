//initialising a new client and setting the protocol 
//using that which web sockets use


const ws = new WebSocket('ws://localhost:3232');

ws.onmessage = (payload) => {

    displayMessages(payload.data);

};

ws.onopen = () => {
    
    displayTitle('CONNECTED TO SERVER');

}

ws.onclose = () => {
    
    displayTitle('DISCONNECTED from SERVER');

}

function displayTitle(title){

    document.querySelector('h1').innerHTML = title;

}

function displayMessages(message){

    let h1 = document.createElement('h1');

    h1.innerText = message;

    document.querySelector('div.message').appendChild(h1);

}



/*getting the data from the input, but treat the forms like  they are in 
an array and getting the very first of the items which is the form we created.
The using the document.getElement method the get the input with id message
*/
document.forms[0].onsubmit = () => {

    let input = (document.getElementById('message'));

    console.log(input.value);

    ws.send(input.value);

}