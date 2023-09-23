const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log('Class started');

        setTimeout(()=>
        {
            this.emit('bellRing',{
                period : "chuti",
                text : 'class had ended',
            },3000);
        })
    }
}
module.exports = School;

