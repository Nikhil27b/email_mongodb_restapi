require("dotenv").config();
const express = require("express");
require("./db/connetion");
const User = require("./model/user")
const path = require("path");
const port = process.env.port || 3000;
const hbs = require("hbs");
const { send } = require("process");
const app = express();


const static = path.join(__dirname, "./public");
const dynamic = path.join(__dirname, "./screens");

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs");

app.set("views", dynamic);

hbs.registerPartials(dynamic);

app.use(express.static(static));


app.get("/", (req,res)=>{
  res.status(200).send("Data");
  })

app.get("/user", (req,res)=>{
  res.status(200).render("index")
  })


app.post("/user", async (req, res) => {
    try {
      const user = new User({
        fname : req.body.fname,
        email : req.body.email
      });
      const userdata = await user.save();
      console.log(userdata);
      res.status(201).send("Applition Submited");
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

app.listen(port , ()=>{
console.log("Server Started " + port)
})

