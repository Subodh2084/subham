
// import {} from "dotenv/config()"
import * as dotenv  from "dotenv"
dotenv.config()
//  export const createAccessToken = ( username: "admin") => {

import jwt from "jsonwebtoken"
export const createAccessToken = (userName) => {
    return jwt.sign(
        { userName },
        `${process.env.JWT_ACCESS_TOKEN_SECRET}`, 
      {
            expiresIn: '1hr',
        }
    )
}

// export const createRefreshToken = ( username:"admin") => {
    export const createRefreshToken = ( userName) => {
    return jwt.sign(
        { userName},
        `${process.env.JWT_REFRESH_TOKEN_SECRET}`,
        {
            expiresIn: '1d',
        }
    )
}

export const verifyAccessToken = (accessToken) => {
    return jwt.verify(accessToken, `${process.env.JWT_ACCESS_TOKEN_SECRET}` )
}

export const verifyRefreshToken = (refreshToken
) => {
    return jwt.verify(refreshToken, `${process.env.JWT_REFRESH_TOKEN_SECRET}`)
}   