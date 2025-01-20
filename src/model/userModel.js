import mongoos from "mongoose";
const userSchema = new mongoos.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,

    required: true,
    },
  password: {
      type: String,
      required:true
      
  }
});
const userModel=mongoos.model("user",userSchema)
export {userModel}