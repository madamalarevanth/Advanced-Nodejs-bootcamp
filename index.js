const cluster = require('cluster')

console.log("is master: ",cluster.isMaster);

const express = require('express')
const app = express();

function doWork(duration){
    const start = Date.now();
    while(Date.now()-start<duration){}
}

app.get('/',(req,res)=>{
    doWork(3000);
    res.send('Hi there');
    
})
app.listen(3000);