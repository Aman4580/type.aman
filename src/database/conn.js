// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/students-api", {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection is successfull");
// }).catch((err)=>{
//     console.log("connection is unsuccessfull");
// })

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/student-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });