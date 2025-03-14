const express= require('express');
const {Router}= require('express');
const user= require('../model/user.js');
const app= express();
const router= Router();
const { body, validationResult } = require('express-validator');
router.get("/createAccount", (req, res)=>{
    return res.status(200).render("form");
})
router.post('/', 
    [
        body("name").isString().trim().isLength({ min: 3 }).escape(),
        body("email").isEmail().normalizeEmail(),
        body("age").isInt({ min: 0, max: 120 }) // Ensure valid age
    ],
    async(req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
try{
    const {name, email, age}= req.body;
const userData=await user.create({
   name:name,
   email:email,
   age:age
});
return res.render("afterLogin");
}
catch(error){
    console.log(error);
    return res.json("invalid input")
}
});
router.get("/allUser", async(req, res)=>{
    try{
let allUser= await user.find({});
return res.json({allUser})
    }
    catch(error){
        console.log(error);
        return res.json(`no user exist`);
       
    }
})
router.post("/singleUser", async(req, res)=>{
    const id= req.body.id;
    console.log(req.body);
try{
 const singleUser= await user.findById(id);
 if(!singleUser){
    return res.json("User does not exist");
 }
console.log(id);
return res.json(singleUser);
}
catch(error){
    console.log(error);
    return res.json("Invalid input")
   
}
})
router.post("/update", async(req, res)=>{
    const {id}= req.body;
    console.log(id);
    try{
    const selectedUser= await user.findById(id);
    if(!selectedUser){
        return res.json("User does not exist");
    }
    console.log(selectedUser);
    return res.render("update", {selectedUser});
    }
    catch(error){
        console.log(error);
        return res.status(404).json("user not find");
    }
   
})
router.post("/update/:id",  [
    body("name").isString().trim().isLength({ min: 3 }).escape(),
    body("email").isEmail().normalizeEmail(),
    body("age").isInt({ min: 0, max: 120 }) // Ensure valid age
],async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        const info= req.body;
    console.log(info);
    const person= await user.findByIdAndUpdate(req.params.id, {
name:info.name,
email:info.email,
age:info.age
    });
    return res.json("user updated sucessfully")
    }
    catch(error){
        console.log(error);
        return res.status(404).json("user not found");
    }
})
router.post("/delete", async(req, res)=>{
    const id= req.body.id;
const deletedUser= await user.findByIdAndDelete(id);
if(!deletedUser){
    return res.json("user does not exist");
}
return res.json("user Deleted");
})
module.exports=router;