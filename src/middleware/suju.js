import { json } from "express";

export default function student(req, res, next) {
    const sujal = req.body;
    if (sujal) {
        const students = sujal;
        console.log(students);
        next();
    }
}