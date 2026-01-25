const express = require('express')
const port = 3366
const app = express()

app.use(express.json())



app.get('/d',(req,res)=>{
    const a =parseInt(req.query.a) 
    const b =parseInt(req.query.b)
    const c = a+b
    res.status(404).json({
        a,
        b,
        c,
        mul: (a*b),
        div:(b/a),
        sub: (b-a)
    })
    console.log(a)
})
//200- ok
//404-error
//501-network disturb hum thora rest le rhe h 

app.listen(port, ()=>{
    console.log("chal rha h")
})

//