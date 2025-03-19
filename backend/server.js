const app =require('./app')
const connectDB=require('./db/db')

process.on('uncaughtException',(error)=>{
     console.log(`server shutting down ${error.message}`)
     process.exit(0)
})

if(process.env.NODE_ENV !== 'PRODUCTION'){
  require('dotenv').config({path:'backend/config/.env'})}
  
connectDB()
app.listen(process.env.PORT,()=>{
  console.log(`App suceessfully listen at port http://localhost:${process.env.PORT}`)
})