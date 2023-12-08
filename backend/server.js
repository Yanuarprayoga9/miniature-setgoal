import express from "express";
import dotenv from 'dotenv'
dotenv.config();
const {PORT,MONGO_URL} = process.env;

const app = express();
app.get('/',(req,res)=>{
    res.send('express js start');
})
app.listen(PORT,()=>{
    console.log(`app listen ${PORT}`);
})