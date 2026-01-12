const express = require('express')
const port=3000
const app = express()

app.get('/', (req, res)=>{
   res.json({
    name:"sbuhfeo",
    id: 1332,
    title: "jwobfjd"
   })
})

app.use(express.json())

app.post('/d', (req, res)=>{
    const title= req.body.title
    const description= req.body.description
    console.log(title  ,description)
    res.json({
        msg :"done"
    })
})

app.listen(port,()=>{
    console.log("hello! port is live!", port)
})

