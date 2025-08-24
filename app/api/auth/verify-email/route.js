
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import UserModel from "@/models/User.model";
import { jwtVerify } from "jose";
import { isValidObjectId } from "mongoose";

export async function POST(request) {
    try{
        await connectDB()
        const {token}= await request.json()
        if(!token){
            return response(false, 400, "Missing token.")
        }
        const sectet = new TextEncoder().encode(process.sectet.env.SECRET_KEY)
        const decoded = await jwtVerify(token, sectet)
        const userId = decoded.payload.userId

        if(!isValidObjectId(userId)){
            return response(false, 400, "invalid user id.", userId)
        }

        const user = await UserModel.findById(userId)
        if(!user){
            return response(false, 404, "User not found.")
        }

        user.isEmailVerified =true
        await user.save()

        return response(true, 200, "Email verification success")
    }catch(err){
        return catchError(err)
    }
}