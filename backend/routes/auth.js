const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const { response } = require('express');
const  bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken'); 
const JWT_SECRET='Sandyisagood$boy'



//Create a User using : POST "api/auth/createuser" . Doesnt require Auth

router.post('/createUser',[
    body('name','Enter a valid name').isLength({ min: 5 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be at least 5 characters').isLength({ min: 5 }),
],async (req,res)=>{
    //If there are errors , return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check weather the user with email exists already
    try{
    let user=await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt); 
    //Create a new password
    user= await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data={
        user:{
            id:user.id
        }
      } 
      const authtoken =jwt.sign(data, JWT_SECRET);
      res.json({authtoken})
      //console.log(jwtData);
      //res.json(user)

    }catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports=router   
