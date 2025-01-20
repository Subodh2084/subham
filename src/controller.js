
import mongoose from "mongoose";
function sujal(a) {
    
    return mongoose.connect(a);
    
}
//const mira=sujal("mongodb+srv://subodh:<db_password>@cluster0.u7v0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
export { sujal }
