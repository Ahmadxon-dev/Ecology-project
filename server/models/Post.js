const {Schema, model} = require("mongoose")
const moment = require("moment");

const postSchema = new Schema({
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
    image:{type:Schema.Types.ObjectId, ref:"Image"}
},{timestamps: true})

module.exports = model("Post",postSchema)