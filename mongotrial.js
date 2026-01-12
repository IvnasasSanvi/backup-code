const express = require('express');
const app = express()
const port = 3400
app.get('/health-checkup', function(req,res){
    const kidneyId = req.query.kidneyId
    const username = req.headers.username
    const password = req.headers.password

    if(username!='Sanvi' || password!='pass'){
        res.status(403).json({
            msg: "User doesnot exist"
        })
        return;
    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return;
    }

    res.json({
        msg: "ur kidney is fine"
    })
})

app.listen(port, ()=>{
    console.log("chal rha h")
})