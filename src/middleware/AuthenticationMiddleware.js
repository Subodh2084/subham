import { verifyAccessToken } from "../token.util.js";
const authenticateToken = (req, res, next) => {
  const token =req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) { 
        res.json(`Login in`);
    } if (token) {
    try {
    const decodedToken = verifyAccessToken(token);
      req.body = decodedToken;
      next()
    } catch (err) {
      throw err;
    }
  } 
};
export { authenticateToken };
