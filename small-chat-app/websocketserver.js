//here we initialise our server

const webSocketServer = require('ws').Server;
const wss = new webSocketServer({port: 3232});



// write a function to listen for 'connection' on that port with its call back

wss.on('connection', (ws) => {

//to get the message after the connection is established and resend that message
    ws.on('message', (message) => {

        if(message == 'close'){

            ws.close();

        }
            else{

                wss.clients.forEach((client) => {

                    client.send(message);
        
                });
        

            }

        
        console.log(message);

    })


    console.log('we are connected');



});