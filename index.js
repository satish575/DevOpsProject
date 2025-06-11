const express=require("express");
const pool=require("./dbConnection");
const app= express();

app.get("/",async(req,res,next)=>{
   const result = await pool.query('SELECT NOW()');
    res.send(`Database connected. Time: ${result.rows[0].now}`);
})

app.get("/healthcheck",(req,res,next)=>{
    res.status(200).send('OK');
})

app.listen(3000,()=>{
    console.log("app listening on port 3000")
})