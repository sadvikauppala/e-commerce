const mongoose = require('mongoose')
module.export=async()=>{
  try{
  await mongoose.connect(process.env.DB_URL)
  console.log(`mongo db connected successfully`)
}
catch (e){
  console.log(`someting went wrong ${e.message}`)
  process.exit(0)
}
}