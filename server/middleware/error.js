const ErrorResponse = require("../utils/errorResponse");
function errorHandler (err, req, res, next) {

    let error={...err}
    error.message=err.message;

    console.log(err);

    console.log(err.name);
    
    res.status(error.statusCode || 500).json({
        sucess:false,
        error:error.message || 'Server Error'
        });

  } 
  module.exports=errorHandler;