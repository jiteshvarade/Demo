const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors({
    origin : true
}))

app.use(express.json());

app.listen(5600, ()=>{
    console.log("Server running on port : 5500");
})

app.get('/',(req,res)=>{

    let html = ``
    res.send("Hello Section A");
})