const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get visits
app.get("/visit/get", (req,res)=>{
db.query("SELECT * FROM visit", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });


// Route to update a visit
app.post('/visit/update/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE visit SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});



// Route to get visit_total
app.get("/visit_total/get", (req,res)=>{
db.query("SELECT * FROM visit_total", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });




// Route to update a SD_MAT
app.post('/sd-mat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sd_mat SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SD_BI
app.post('/sd-bi/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sd_bi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SD_IPA
app.post('/sd-ipa/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sd_ipa SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SMP_MAT
app.post('/smp-mat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE smp_mat SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SMP_BI
app.post('/smp-bi/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE smp_bi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SMP_IPA
app.post('/smp-ipa/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE smp_ipa SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SMA_MAT
app.post('/sma-mat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sma_mat SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SMA_BI
app.post('/sma-bi/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sma_bi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a SMA_IPA
app.post('/sma-ipa/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sma_ipa SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a Fitur Pilihan Materi
app.post('/f-pilmat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_pilihan_materi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a Fitur Search
app.post('/f-search/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_search SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a Fitur Random Topic
app.post('/f-randtop/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_random_topic SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });

// Route to update a Fitur FAQ
app.post('/f-faq/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_faq SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });






app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})