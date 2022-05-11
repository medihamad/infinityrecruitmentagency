const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const Candidate = require('./models/candidates.js');

const res = require('express/lib/response');
const dbURI = "mongodb+srv://hamad:hamad@mydatabase.3knfh.mongodb.net/infinity?retryWrites=true&w=majority";
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result)=> app.listen(3000))
        .catch((err)=>{
            console.log(err);
        })

app.use(fileUpload())
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    // let image = req.files.image;
    // image.mv(path.resolve(__dirname,'public/img', image.name), async(error)=>{
    //     await
    // })

    res.render('add-candidate',{success:''});
    
});

app.post('/', (req, res) => {
    // let image = req.files.image;
    // image.mv(path.resolve(__dirname,'public/img', image.name), async(error)=>{
    //     await
    // })
    const candidate = new Candidate(req.body);
    candidate.save()
        .then((result)=>{
            console.log(result)
            res.render('add-candidate', {success: 'inserted successfully'});
        })
        .catch((err) =>{
            console.log(err);
        })
    
});

app.get('/gccmedical', (req,res)=>{
    Candidate.find()
        .then((result)=>{
            res.render('gccmedical',{candidate: result});
        })
        .catch((err)=>{
            console.log(err);
        });

});


