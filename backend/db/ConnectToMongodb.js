import mongoose from "mongoose";


const ConnectToMongodb = async () => {
   try {
    await  mongoose.connect(process.env.MONGO_DB_URI)
    console.log("Mongodb connected successfully")
   } catch (error) {
    console.log(error.message)
   }
}

export default ConnectToMongodb