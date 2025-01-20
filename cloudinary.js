import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";  dotenv.config();
import fs from "fs";
    // Configuration
(async () =>
  cloudinary.config({
    cloud_name: "dlrtmdrvd",
    api_key: 595783395649373,
    api_secret: "kT1NvlIS6a1hrcSDFHsbHZgD9ic", // Click 'View API Keys' above to copy your API secret
  }))();
    // Upload an image
const uploadResult = async (localFilePath,file) => {
    try {
        const response = await cloudinary.uploader.upload
            (localFilePath,
             
                 
        
            
            
            
            
            
            
            
            
            
            
            
            
            
            













            
            
            
            
            
            

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        
        
        
        
                {
                    resource_type: "auto",
                 
                    public_id: `${file}`}
            
            
            
            
            
            
            )
        console.log('File uploaded successfully', response.url)
        return response;
    } catch (err) {
        fs.unlinkSync(localFilePath);
        console.log(err);
};
}




























































//   console.log(uploadResult,`file uploaded`);

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url("shoes", {
//     fetch_format: "auto",
//     quality: "auto",
//   });

//   console.log(optimizeUrl);

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url("shoes", {
//     crop: "auto",
//     gravity: "auto",
//     width: 500,
//     height: 500,
//   });

export { uploadResult }
// console.log(autoCropUrl);
