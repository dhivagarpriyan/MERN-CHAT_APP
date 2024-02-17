import User from "../models/AuthModel.js";

export const getUsersForSideBar= async (req,res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in the getUsersforSideBar controller :", error.message );
        res.status(500).json("internal server error")
    }
}