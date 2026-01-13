const express = require('express');
const app = express()
const zod = require("zod")
const port = 3400

const schema = zod.array(zod.number())

app.use(express.json())

app.post("/health-checkup", function(req, res){
    //kidneys=[1,2,3,4]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:" input is invalid"
        })
    }
    else{
        res.send({
        response
    })
    }
    
})

// app.get('/health-checkup', function(req,res){
//     const kidneyId = req.query.kidneyId
//     const username = req.headers.username
//     const password = req.headers.password

//     if(username!='Sanvi' || password!='pass'){
//         res.status(403).json({
//             msg: "User doesnot exist"
//         })
//         return;
//     }

//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(411).json({
//             msg: "wrong inputs"
//         })
//         return;
//     }

//     res.json({
//         msg: "ur kidney is fine"
//     })
// })

app.listen(port, ()=>{
    console.log("chal rha h")
})