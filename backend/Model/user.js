const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  phoneNumber:{type:Number},
  password:{type:String, reqired:true, minLength:4},
  avartar:{
    id:{type:string},
    url:{type:string}
  },
  address:[
  {
    country:{type:string , required:true},
    city:{type:string ,required:true},
    address1:{type:string},
    address2:{type:string},
    pincode:{type:Number,required:true}

    }
  ],
  role:{type:string,defaule:user},
  createAt:{type:Date,default:Date.now()}
})

userSchema.pre('save',async function(next){
  if(!this.modified('password'))
    return next()

  await bcrypt.hash(this.password,10)
  next()
})

userSchema.methods.jsonTokens= function(){
  return jwt.sign({id:this._id},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_EXPIRES})
}