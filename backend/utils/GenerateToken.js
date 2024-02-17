import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res)=>{
     const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
     });

     res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,//prevent xss attack cross-site scripting attacks
        sameSite:"none",//csrf cross-site request Forgery Attacks
        secure:process.env.NODE_DEV !== "development"
     })

}

export default generateTokenAndSetCookie