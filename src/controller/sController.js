// import { sujal } from "../model/sujall.js";

import { youtubeModel } from "../model/sujall.js";
import { userModel } from "../model/userModel.js";

const s = async (req, res) => {
    const subhamm = await req.body;
    if (subhamm) {
        
        const subham = await sujal.create(
            {  
               
                 
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                sukraj:req.body.sukraj  
        }
        );      
        
        return res.status(200).send("pass")
    
    };
}
const ss = async (req, res) => {
    return res.send(await userModel.find({}))

}
const sujalsubham = async (req, res) => {

    const sujall =req.params.id
    

    return res.send(await sujal.find({
        _id: sujall 
     }))
};  
export { s, ss, sujalsubham };