const express=require('express');
const app=express();
app.listen(3001,()=>{
    console.log('listening on port no 3001')
})
app.use('/documents',require('./document/DocumentServer'));