const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const Mongoose  = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imgs')
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname )
    }
})



let filefilter = () =>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' )
    {
        cb(null,true);
    }else{
        return cb(null , false);
    }
}
   
const upload = multer({ storage: storage ,
    filefilter : filefilter
 })

// var upload = multer({ dest: 'public/uploads/' })


const app = express();


//middlewares

app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/public'));


const PORT = 3000 ;

//Mongo URI
const MongoURI = 'mongodb+srv://Bizer44:sexyboltenabhai@cluster0.rzwrw.mongodb.net/mongoupload_aliya?retryWrites=true&w=majority';


//Routes

//Post routes

app.post('/upload', upload.single('file') , (req,res)=>{
    res.send(req.file)
})


//get routes

app.get('/' ,(req,res)=>{
    res.render('index')
})


app.get('/about' ,(req,res)=>{
    res.render('about')
})

app.get('/contact' ,(req,res)=>{
    res.render('contact')
})

app.get('/our-initiatives-women' ,(req,res)=>{
    res.render('women')
})

app.get('/our-initiatives-skill-development-center' ,(req,res)=>{
    res.render('skilldev')
})

app.get('/our-initiatives-one-glass-of-gratitude' ,(req,res)=>{
    res.render('oneglass')
})

app.get('/our-initiatives-food-distribution-center' ,(req,res)=>{
    res.render('fooddistri')
})

app.get('/ahfsecure' ,(req,res) =>{
    res.render('admin')
})




app.listen(PORT , (req,res) =>{
    console.log("Server is up and running on port : 3000");
})
