const School = require('./school')
const school = new School();

school.on('bellRing',(data) =>{
    console.log(`Run ! School has finished ${data.period} ${data.text}`)
})

school.startPeriod();