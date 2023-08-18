const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const config = require('config')

app.get('/', (req, res)=>{
    res.send('My Awsome Hello world ')
})

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/hello',(req, res)=>{
    res.status(200)
    res.send('Hi, there!')

})

app.listen(port, ()=>{
    console.log(`This Is A Nodejs Application listening on http://localhost:${port}`);
})