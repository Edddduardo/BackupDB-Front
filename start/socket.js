'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/
const Setting = use('App/Models/Setting')
const Ws = use('Ws')
var exec = require('child_process').exec;

Ws.channel('chat', 'SocketController')

//  Ws.channel('chat', ({ socket }) => {
//   console.log('user joined with %s socket id', socket.id)
//   socket.on('message', (data) => {
//     var msg='hello Server';
//     if(data !='hello Server'){
//     var command = exec('mysqldump --user=root --password=root -h 127.0.0.1 -P 3309 prueba > '+setting.name+'.sql');
//     }
//     console.log(data)
//   })
//   socket.emit('message2', 'Hello client')
// })