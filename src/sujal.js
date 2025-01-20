
import { response, Router } from "express";
import { s , ss, sujalsubham } from "./controller/sController.js";
import student from "./middleware/suju.js";

import { authenticateToken } from "./middleware/AuthenticationMiddleware.js";
import { youtube } from "./controller/youtubeController";
import multer from "multer";
import { ytpost } from "./controller/youtubeController";
import {  upload } from "./multer.middleware.js";
import { uploadResult } from "../cloudinary.js";
import { fileURLToPath } from "url";

const youtuberouter = Router();


youtuberouter.route("/link/:id").get(sujalsubham)

youtuberouter.post("/upload", upload.single("file"), (req, res) => {
    uploadResult(req.file.path, req.file.filename);
    
console.log(req.file)
})

youtuberouter.get("/", authenticateToken, ss)
export default youtuberouter; 




