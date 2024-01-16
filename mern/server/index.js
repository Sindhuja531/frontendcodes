const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const Empmodel = require('./model/emp')
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://Sindhu:Sindhuj%40m1@cluster.yvfujt6.mongodb.net/");
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    Empmodel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("password is incorrect")
            }
        } else {
            res.json("no record existed")
        }
    })
})
app.post('/register', (req, res) => {
    Empmodel.craete(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))


})
app.listen(3001, () => {
    console.log("Server is running");
})
