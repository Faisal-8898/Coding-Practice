const EventEmitter = require('events');
const emitter = new EventEmitter();

//
emitter.on('bellRing',()=>{
  console.log("run!!")
})
//Raising an event
emitter.emit('bellRing'); 


//
emitter.on('phoneRing',(data)=>{
    console.log(`pichup!! ${data}`)
  })
  //Raising an event
  emitter.emit('phoneRing','whatsappcall'); 

  emitter.on('phoneRing',(data)=>{
    console.log(`pichup!! ${data.period}`)
  })
  //Raising an event
  emitter.emit('phoneRing',{
  period : 'dupur',
  text : 'valo moto poro'
},); 