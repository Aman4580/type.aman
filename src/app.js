// const express = require("express");
//  require("./database/conn");
//  const Student = require("./models/student");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// // creaTE A NEW STUDENT 
// // app.get("/", (req,res) =>{
// //     res.send("hello aman i am a good boy  ");
// // })
// app.post("/students", (req,res) =>{
  
//     console.log(req.body);
//     const user  = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(401).send(err);
//     })

// })
// app.listen(port, ()=>{
//     console.log(`connection is setup at port number ${port}`);
// })
const express = require("express");
const connectDB = require("./database/conn");
const Student = require("./models/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

connectDB(); // Connect to the database

app.post("/students", (req, res) => {
  const user = new Student(req.body);

  user.save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
