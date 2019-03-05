'use strict'
var exec = require('child_process').exec;
const Setting = use('App/Models/Setting')

class SocketController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage(message){
    this.socket.broadcastToAll('message',message)
   console.log(message)
    if(message !='hello Server'){
      this.show(message)
      }
  }
  async show (id) {
    let setting = await Setting.findOrFail(id);
    console.log(setting)
    var command = exec('mysqldump --user=root --password=root -h 127.0.0.1 -P 3309 prueba > '+setting.name+'.sql');
    return setting
  }

}

module.exports = SocketController
