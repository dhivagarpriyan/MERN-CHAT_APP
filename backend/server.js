import path from "path";
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

  const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());


app.use("/api/auth",AuthRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});




server.listen(PORT,()=>{
    ConnectToMongodb()
    console.log(`server running on ${PORT}`)
})
