const express = require("express")
const mongoose = require('mongoose')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const Post = require('./models/Post')
const Image = require("./models/Image");
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
function start(){
    const PORT = 5000 || process.env.PORT
    app.listen(PORT, ()=> {
        console.log("Server has been started on port " + PORT)
    })
    const password = 'lki4BN6vS1rFbCI1'
    mongoose.connect(`mongodb+srv://ahmadxon2008:${password}@cluster0.ljka0vv.mongodb.net/test`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}
start()

// const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "../client/public/images/");
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     },
// });
// const upload = multer({ storage: storage });

app.get("/statistics", async (req,res)=>{

    res.json(await Image.find())
    return Post.find();
})
app.post("/add",  async (req,res)=>{
    const {district, street, description} = req.body
    if (!district || !street || !description){
        res.redirect("/")
        return
    }
    // const imageName = req.file.filename;
    const imgData = {
        // image:imageName,
        district,
        street,
        description
    }
    console.log(imgData)

    // console.log(imageName)
    await Image.create(imgData);
    // await Post.create(postData)
    res.redirect('/')
})

app.get("/product/:id",async (req,res)=>{
    const {id} = req.params
    console.log(req.params)
    res.json(await Image.findById({_id:id}))
})

