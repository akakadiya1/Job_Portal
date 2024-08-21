// Old Method
// const express = require('express')      

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Running server on port 3000 [localhost:3000/home]
// app.get("/home", (req, res)=>{
//     return res.status(200).json({
//         message:"Developing Job Portal",
//         success:true
//     })
// });

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser);
const corsOptions = {
    origin:'http//localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})