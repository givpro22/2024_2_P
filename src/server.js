const express = require("express") //import express from "express"
const app = express()

app.listen(8080,function(){
    console.log("포트8080으로 서버 대기중...")
})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/d.html')


})