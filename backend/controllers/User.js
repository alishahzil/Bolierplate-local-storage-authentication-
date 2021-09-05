const User = require('../models/User')
const ErrorHandler = require('../utils/errorHandler')
const asyncHandler = require('../middlewares/async')
//@desc Created new User
//@route Post /api/user/register
//@access public
exports.createAccount =  async(req,res,next)=>{
    const {email,name,password} = req.body
    if(email === null && name === null && password === null){
           const er = new ErrorHandler(`Fail to create account`, 404)
             return  res.json({
                 success:false,
                 error: er.message
             }) 
    }else{
        try {
             const checkuser = await User.findOne({email}).select('+password')
            if(checkuser){
                const er = new ErrorHandler(`User already register`, 404)
                return  res.json({
                    success:false,
                    error: er.message
                }) 
            }
            const user = new User({email,name,password})
            const createdUser =  await user.save()
            console.log(createdUser)
            sendTokenResponse(createdUser, 200, res)
        } catch (err) {
              const er = new ErrorHandler(`Fail to create account`, 404)
                return  res.json({
                    success:false,
                    error: er.message
                }) 
             
        }
    }
}
//@desc Created new User
//@route Post /api/user/login
//@access public
exports.loginAccount =asyncHandler( async(req,res,next)=>{
    const {email,password} = req.body
    if(email == null  && password ==null){
          return next(new ErrorHandler('Fail to login',401))
    }else{
        try {
           const user = await User.findOne({email}).select('+password')
           if(!user){
             const er = new ErrorHandler(`User not register`, 404)
             return  res.json({
                 success:false,
                 error: er.message
             }) 
           }
            const isMatch = await user.matchPassword(password);
             if(!isMatch){
                  const er = new ErrorHandler(`Invalid credentials`, 404)
                    return  res.json({
                        success:false,
                        error: er.message
                    }) 
           }
            sendTokenResponse(user, 200, res)
        } catch (err) {
            
             const er = new ErrorHandler(`Fail to login`, 404)
                    return  res.json({
                        success:false,
                        error: er.message
                    }) 
        }
    }
})
//@desc Get login user using cookies
//@route get /api/user/getme
//@access private

exports.getMe =async(req,res)=>{
    const user = req.user
    console.log(user)
    res.status(200).json({
        success:true,
        data:user
    })
}




// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};