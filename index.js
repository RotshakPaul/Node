// imports
const express = require('express');
const bodyParser = require('body-parser');

// initialize express or Static Files
// app.use('/css', express.static(__dirname + 'public/css'))
const app = express()
app.use(express.static(__dirname + "/static"))
app.use(express.static(__dirname + ''))
app.use(bodyParser.urlencoded({ extended: true }))

// index route/Navigation
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}about.html`);
}) 

app.get("/privacy", (req, res) => {
    res.sendFile(`${__dirname}privacy.html`);
}) 
// for form post request
app.post("/post", (req, res)=>{
    console.log(req.body);
   res.send("Submitted Successful!")
})

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at port ${port}!`)
})
