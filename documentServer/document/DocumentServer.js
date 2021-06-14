const express=require('express');
const router=express.Router();
var http = require('http')
var queryString = require('querystring')
router.get('/document/:processName',(req,res)=>{
    var options = {
		host: 'localhost',
		port: '8080',
		path: '/engine-rest/process-definition?' + queryString.stringify({ name: req.params.processName, latestVersion: true }),
		method: 'GET',
		auth: 'demo' + ':' + 'demo'
    };
    var req=http.request(options,(result)=>{
        console.log(result.statusCode)
         res.status(result.statusCode);
		 res.set(result.headers);
		result.pipe(res);
    })
    req.on('error',(err)=>{
        res.status(500).send('Internal Server Error');
    })
    req.end();
})
module.exports=router;