//***Paste in the code for events from app.js */
const EventEmitter = require('events');
// const emitter = new EventEmitter();


// //***MODULE WRAPPER FUNCTON */

// console.log(__filename); /***Prints the file path with the file name */
// console.log(__dirname);//***Prints the path and directory name ****/

var url = 'http://mylogger.io/log';

/**Extending EventEmitter */
class Logger extends EventEmitter{
     log(message){
        //send an http request
         console.log(message);
    
         //Raise an event
    // emitter.emit('Message Logged',{id:1, url: 'http://'});  
    this.emit('Message Logged',{id:1, url: 'http://'});

}
};
//  module.exports.log = log //module.log = log;
 module.exports = Logger; //***Prints the same message as the above and below statements ***/







  