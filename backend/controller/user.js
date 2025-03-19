const express = require('express');
const { upload } = require('../multer.js');
const User = require('../Model/user.js');
const path = require('path');
const fs = require('fs');
const ErrorHandler = require('../utils/ErrorHandler.js');




const router = express.Router();

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const avatar = req.file ? req.file.filename : null;
  
      // Check if the user already exists
      const userEmail = await User.findOne({ email });
      if (userEmail) {
        // If user exists and there was a file uploaded, delete the uploaded file
        if (req.file) {
          const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
        return next(new ErrorHandler("User already exists", 400));
      }
  
      // Ensure that a file was uploaded (optional: only allow images or specific types)
      if (!req.file) {
        return next(new ErrorHandler("No file uploaded", 400));
      }
  
      // Get the uploaded file's filename
      const fileName = req.file.filename;
  
      // URL to access the file on the front end
      const fileUrl = `/uploads/${fileName}`;
  
      // Create the new user object
      const newUser = new User({
        name,
        email,
        password, // You need to hash this password before saving to the database
        avatar: {
          id: fileName,  // You can store filename or use something like a cloud storage URL
          url: fileUrl,
        }
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Send the response
      res.status(201).json({
        message: "User created successfully!",
        user: {
          name: newUser.name,
          email: newUser.email,
          avatar: newUser.avatar,
          createdAt: newUser.createdAt,
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });






router.post('/login-user' , async(req,res,next)=>{
    try{
        const {email, password}= req.body
        if(!email|| !password)
            return next(new ErrorHandler("all the fields are required",400))
   const user = await User.findOne({email}).select("password")
if(!user)
return next(new ErrorHandler("user dosent exist",400))
const isPasswordValid = await user.comparePassword(password)
if(!isPasswordValid)
    return next(new ErrorHandler("please provide correct information",400))
sendToken(user,201,res)
    }

    
    catch(e){
    return next(new ErrorHandler(e.message,500))}
})











module.exports = router;
