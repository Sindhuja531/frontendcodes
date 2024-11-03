const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
    name: String,
    emial: String,
    password: String
})
const EmpModel = mongoose.model("employees","EmpSchema")
module.export = Empmodel 