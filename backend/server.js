import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
const PORT = process.env.PORT || 5000
dotenv.config();
import AuthRoutes from "./Routes/Auth.js";
import messageRoutes from "./Routes/MessageRoutes.js"
import userRoute from "./Routes/UserRoute.js"
import ConnectToMongodb from "./db/ConnectToMongodb.js";
import bodyParser from "body-parser";
import { app, server } from "./socket/socket.js";
app.use(
    cors({
    
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());


app.use("/api/auth",AuthRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoute);




app.get("/test",(req,res)=>{
    res.json("running successfully")
})

server.listen(PORT,()=>{
    ConnectToMongodb()
    console.log(`server running on ${PORT}`)
})

//cBkL1vVCabPe0iRo