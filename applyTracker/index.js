const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path');
const Application = require('./models/apply')


mongoose.connect('mongodb://127.0.0.1:27017/application')
    .then(() => {
        console.log("Mongo Connection Open")   
    }).catch((err) => {
        console.log("Error", err)
    });

app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));

const status = ['applied', 'rejected', 'interviewing', 'offer', 'hired']

app.get('/application', async (req, res)=>{
    const applications = await Application.find({});
    res.render('index', { applications });
});


app.put('/application/:id', async (req, res)=>{
    const { id } = req.params;
    const toDB = await Application.findByIdAndUpdate(id, req.body, { runValidators: true, new : true });
    res.redirect(`/application/${toDB._id}`)
});

app.get('/application/new', (req, res)=>{
    res.render('new', { status });
});

app.post('/application', async(req, res)=>{
    const madeApplication = req.body;
    const toDB = new Application(madeApplication);
    await toDB.save();
    res.redirect(`/application/${toDB._id}`)
});

app.get('/application/:id',async (req, res)=>{
    const { id } = req.params;
    const findApplication =await Application.findById(id);
    res.render('details', { findApplication });
});

app.get('/application/:id/edit',async (req, res)=>{
    const { id } = req.params;
    const application = await Application.findById(id);
    res.render('edit', { application, status });
});

app.delete('/application/:id', async (req ,res)=>{
    const { id } = req.params;
    const deletedApplication =await Application.findByIdAndDelete(id);
    res.redirect('/application');
})

app.listen('5000', ()=>{
    console.log('APP IS LISTENING ON PORT 3000')
});