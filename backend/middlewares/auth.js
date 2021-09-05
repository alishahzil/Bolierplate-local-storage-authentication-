  
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.protect = async (req,res,next)=>{
    let token
    if(  req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       token = req.headers.authorization.split(' ')[1]
    }
    if(!token){
        const er = new ErrorHandler(`User not authorized`, 404)
      return res.json({
         success:false,
         error: er.message
    })}
    try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (err) {
    return  res.status(401).json({
            success:false,
            Error: 'Request fail',
            data:{}
    })
  }
}