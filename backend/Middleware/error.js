const errorHandler = require('../utils/Error')


module.exports=(err,req,res,next)=>{
    err.message=err.message||'something went wrong'
    err.statuscode=err.statuscode

    if(err.name=="CastError"){//mongodb id error-->mongodb should have 14 digit hexa decimal number if not we will get cast error
        const message="send the correct id"
        err= new errorHandler(message,400)
    }

    if(err.name=="11000"){
        const message="id already exist"
        err= new errorHandler(message,400)
    }
    
    if(err.name=="jsonWebToken"){

    }
    
    if(err.name=="jsonTokenexpired")
    {

    }

    res.status(err.statuscode).json({
        success:"false",
        message:err.message
    })

}