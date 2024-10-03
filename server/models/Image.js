const {Schema, model} = require("mongoose")
const moment = require("moment");

const imageSchema = new Schema({
    image:{type:String, required:true},
    district: {
        type:String,
        enum:["Bektemir", "Mirobod", "Mirzo Ulug'bek", "Sergeli", "Olmazor", "UchTepa", "Shayxontohur", "Yashnobod", "Chilonzor", "Yunusobod", "Yakkasaroy"],
        required:true
    },
    street:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

module.exports = model("Image",imageSchema)