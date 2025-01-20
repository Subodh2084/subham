import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";  
import router from "./sujal.js";
import { sujal } from "./controller.js";
import youtuberouter from "./sujal.js";
import { userRouter } from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config()
sujal(
  "mongodb+srv://subodh:subodh10@cluster0.u7v0x.mongodb.net/sujal?retryWrites=true&w=majority&appName=Cluster0"
);
const port = process.env.PORT ;

const upload = multer({ dest: "upload/" });
const app = express();

app.use(express.json());
app.use("/home", youtuberouter);
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
export { app, upload };
