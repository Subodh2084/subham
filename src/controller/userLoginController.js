import { userModel } from "../model/userModel.js  ";
import bodyParser from "body-parser";
import { createAccessToken, createRefreshToken } from "../token.util.js";

const userSignup = async (req, res) => {
  try {
    const userdetails = await req.body;

    if (userdetails) {
      const user = await userModel.create({
        firstName: req.body.firstName,
        lastName: userdetails.lastName,
        email: userdetails.email,
        userName: userdetails.userName,
        password: userdetails.password,
      });

      return res.status(200).json(`baburammmmm`);
    } else {
      res.status(400).json(`Need data`);
    }
  } catch (err) {
    console.log(err);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await req.body;
    if (user) {
      const Login = await userModel.find({
        userName: user.userName
      });
      if (!(Login[0])) {
        res.send(`Username needed`);
      } else {
        const sujal = user.password === Login[0].password;
        if (!sujal) {
          res.send(`password error`);
        }

        // res.status(200).json(`Login Successful`);
        const accessToken = createAccessToken(user.userName);

        const refreshToken = createRefreshToken(user.userName);

        res
          .cookie("refreshToken", refreshToken, {
            httpOnly: true,
          })
          .json({ accessToken });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export { userSignup, userLogin };
