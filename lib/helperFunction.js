import { NextResponse } from "next/server"
import { object, success } from "zod"

export const response = (success, statuscode, message, data={})=>{
    return NextResponse.json({
        success, statuscode, message, data
    })
}

export const catchError = (error, customMessage)=>{
    if(error.code=== 11000){
        const keys = object.keys(error.keyPattern).join(',')
        error.message= `Duplicate field: ${keys}. These field value must be unique. `
    }

    let errorObj = {}
    if (process.env.NODE_ENV === 'development'){
        errorObj={
            message: error.message,
            error
        }
    }else {
        errorObj={
            message: customMessage || 'Internal server error.',
        }
    }

    return NextResponse.json({
        success: false,
        statuscode: error.code,
        ...errorObj
    })
}