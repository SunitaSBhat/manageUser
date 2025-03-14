const express= require('express');
const app = express();
const path= require("path");
const mongoose= require("mongoose");
var bodyParser = require('body-parser')

const router= require("./routes/index.js");
const port =8000;
mongoose.connect("mongodb://127.0.0.1:27017/user", {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
  mongoose.connection.on("error", err => {
  
    console.log("err", err)
  
  })
  mongoose.connection.on("connected", (err, res) => {
  
    console.log("mongoose is connected")
  
  })
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

//this will render the main page
app.get("/", (req, res)=>{
return res.render('afterLogin');
});

//render the remaining page
app.use("/user", router);
app.listen(port, ()=>{
console.log(`server running on ${port}`);
})