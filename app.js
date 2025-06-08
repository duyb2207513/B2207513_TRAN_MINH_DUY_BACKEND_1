const express = require("express");
const cors =require("cors");
const app = express();

const ContactRouter=require("./app/routes/contact.router");
const ApiError = require("./app/api-error");
app.use(cors());
app.use(express.json());
app.get("/", (req,res) => {
    res.json({message:"Welcome to contact book application"})
});
app.use("/api/contacts",ContactRouter);


//Handle 404 response
app.use((req,res,next)=>{
    return next(new ApiError(404,"Resource not found"));
});
app.use((err,req,res,next)=>{
    return res.status(error.statusCode||500).json({
        message:error.message|| "Internal Sever Error",
    })
})
module.exports= app;
