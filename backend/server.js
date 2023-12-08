import express from "express";
import dotenv from 'dotenv'
dotenv.config();
import goalRouter from './router/goalRouter.js'
import userRouter from './router/userRouter.js'
const {PORT,MONGO_URL} = process.env;

import connectDB from "./config/db.js";
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);


app.get('/',(req,res)=>{
    req.user = 5;
    res.send('express js start');
    console.log(req.user)
})
app.get('/a',(req,res)=>{
    res.send('express js start');
})
app.listen(PORT,()=>{
    console.log(`app listen ${PORT}`);
})