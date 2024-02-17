import User from "../models/AuthModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/GenerateToken.js";

export const signup = async (req, res) => {
	try {
		const { fullname, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

       const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}
    

		// HASH PASSWORD HERE
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = await  User.create({
      fullname,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

		
      if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
			res.status(201).json({
				_id: newUser._id,
				fullname: newUser.fullname,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		}else{
			res.status(404).json("Invalid user")
		}
	
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req,res)=>{
    try{
		const {username,password}=req.body;
		const user = await User.findOne({username});
		const  isPassword = await bcrypt.compare(password ,user?.password || "")
       
	  if(!user || !isPassword){
         return res.status(404).json({Error : "invalid username or password"})
	  }

	  generateTokenAndSetCookie(user._id,res);
	  res.status(201).json({
		_id:user._id,
		fullname:user.fullname,
		username:user.username,
		profilePic:user.profilePic
	  })
	}catch(error){
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

export const logout = (req,res)=>{
    try {
		res.cookie("jwt","",{maxAge:"0"});
		res.status(201).json("logedout successfully")
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
		
	}
}