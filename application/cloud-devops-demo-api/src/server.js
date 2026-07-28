const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/health", (req,res)=>{
    res.status(200).json({
        status:"healthy",
        service:"cloud-devops-demo-api"
    });
});


const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;