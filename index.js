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

// Route for creating the visit
app.post('/visit/create', (req,res)=> {

const count = req.body.count;

db.query("INSERT INTO visit (visit) VALUES (?)",[visit], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to update a visit
app.post('/visit/update/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE visit SET count = count + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a visit

app.delete('/visit/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM visit WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })






// Route to get visit_total
app.get("/visit_total/get", (req,res)=>{
db.query("SELECT * FROM visit_total", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });


// Route for creating the visit_total
app.post('/visit_total/create', (req,res)=> {
const total_count = req.body.total_count;
db.query("INSERT INTO visit_total(id, total_count, date) SELECT '', count, updatedAt FROM visit",[visit_total], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })


// Route to get last record a visit_total
app.get("/visit_total/getLastRecord", (req,res)=>{
    db.query("SELECT * FROM visit_total ORDER BY id DESC LIMIT 1", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to delete a visit

app.delete('/visit_total/delete/:id',(req,res)=>{
const id = req.params.id;
db.query("DELETE FROM visit_total WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})