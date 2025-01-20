import { url } from "inspector";
import multer from "multer";
import { fileURLToPath } from "url";

const maxSize = 1 * 1024 * 1024;// Set up storage for uploaded files




















 const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
      return file
     },
  limits:{fileSize:maxSize}
});

// Create the multer instance
const upload = multer({ storage: storage });

export { upload };
