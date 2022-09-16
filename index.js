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
app.get("/visit-total/get", (req,res)=>{
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
// Route to get SD_MAT
app.get("/sd-mat/get", (req,res)=>{
    db.query("SELECT * FROM sd_mat", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SD_MAT
app.get("/daily-sd-mat/get", (req,res)=>{
    db.query("SELECT * FROM daily_sd_mat", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SD_BI
app.post('/sd-bi/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sd_bi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SD_BI
app.get("/sd-bi/get", (req,res)=>{
    db.query("SELECT * FROM sd_bi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SD_BI
app.get("/daily-sd-bi/get", (req,res)=>{
    db.query("SELECT * FROM daily_sd_bi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SD_IPA
app.post('/sd-ipa/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sd_ipa SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SD_IPA
app.get("/sd-ipa/get", (req,res)=>{
    db.query("SELECT * FROM sd_ipa", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SD_IPA
app.get("/daily-sd-ipa/get", (req,res)=>{
    db.query("SELECT * FROM daily_sd_ipa", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SMP_MAT
app.post('/smp-mat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE smp_mat SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SMP_MAT
app.get("/smp-mat/get", (req,res)=>{
    db.query("SELECT * FROM smp_mat", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SMP_MAT
app.get("/daily-smp-mat/get", (req,res)=>{
    db.query("SELECT * FROM daily_smp_mat", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SMP_BI
app.post('/smp-bi/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE smp_bi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SMP_BI
app.get("/smp-bi/get", (req,res)=>{
    db.query("SELECT * FROM smp_bi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SMP_MAT
app.get("/daily-smp-bi/get", (req,res)=>{
    db.query("SELECT * FROM daily_smp_bi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SMP_IPA
app.post('/smp-ipa/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE smp_ipa SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SMP_IPA
app.get("/smp-ipa/get", (req,res)=>{
    db.query("SELECT * FROM smp_ipa", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SMP_MAT
app.get("/daily-smp-ipa/get", (req,res)=>{
    db.query("SELECT * FROM daily_smp_ipa", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SMA_MAT
app.post('/sma-mat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sma_mat SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SMA_MAT
app.get("/sma-mat/get", (req,res)=>{
    db.query("SELECT * FROM sma_mat", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SMA_MAT
app.get("/daily-sma-mat/get", (req,res)=>{
    db.query("SELECT * FROM daily_sma_mat", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

// Route to update a SMA_BI
app.post('/sma-bi/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sma_bi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SMA_BI
app.get("/sma-bi/get", (req,res)=>{
    db.query("SELECT * FROM sma_bi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SMA_BI
app.get("/daily-sma-bi/get", (req,res)=>{
    db.query("SELECT * FROM daily_sma_bi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to update a SMA_IPA
app.post('/sma-ipa/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE sma_ipa SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get SMA_IPA
app.get("/sma-ipa/get", (req,res)=>{
    db.query("SELECT * FROM sma_ipa", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily SMA_MAT
app.get("/daily-sma-ipa/get", (req,res)=>{
    db.query("SELECT * FROM daily_sma_ipa", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to update a Fitur Pilihan Materi
app.post('/f-pilmat/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_pilihan_materi SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get Fitur Pilihan Materi
app.get("/f-pilmat/get", (req,res)=>{
    db.query("SELECT * FROM fitur_pilihan_materi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily Fitur Pilihan Materi
app.get("/daily-f-pilmat/get", (req,res)=>{
    db.query("SELECT * FROM daily_fitur_pilihan_materi", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to update a Fitur Search
app.post('/f-search/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_search SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get Fitur Search
app.get("/f-search/get", (req,res)=>{
    db.query("SELECT * FROM fitur_search", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily Fitur Seacrh
app.get("/daily-f-search/get", (req,res)=>{
    db.query("SELECT * FROM daily_fitur_search", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to update a Fitur Random Topic
app.post('/f-randtop/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_random_topic SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get Fitur Random Topic
app.get("/f-randtop/get", (req,res)=>{
    db.query("SELECT * FROM fitur_random_topic", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get daily Fitur Random Topic
app.get("/daily-f-randtop/get", (req,res)=>{
    db.query("SELECT * FROM daily_fitur_random_topic", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to update a Fitur FAQ
app.post('/f-faq/update/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE fitur_faq SET count = count + 1, updatedAt = NOW() WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });
// Route to get Fitur FAQ
app.get("/f-faq/get", (req,res)=>{
    db.query("SELECT * FROM fitur_faq", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
// Route to get Fitur FAQ
app.get("/daily-f-faq/get", (req,res)=>{
    db.query("SELECT * FROM daily_fitur_faq", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });







app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})