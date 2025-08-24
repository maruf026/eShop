
"use client";

import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import verifiedImg from "@/public/assets/verified.gif"
import verificationFailedImg from "@/public/assets/verification-failed.gif"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WEBSITE_HOME } from "@/routes/website";

const EmailVerification = ({ params }) => {
  const { token } = params;
  const [iseVerified, setIsVerified]=useState(false)
  useEffect(()=>{
    const verify= async ()=>{
        const {data: verificationResponse} = await axios.post('/api/auth/verify-email', {token})
        if(!verificationResponse.success){
          setIsVerified(true)
        }
    }
    verify()
  },[token])

  return (
    <Card className="w-[400px] ">
        <CardContent>
           {
            iseVerified ?
            <div>
            <div className="flex justify-center items-center">
                  <Image src={verifiedImg.src} height={verifiedImg.height} width={verifiedImg.width} className="h-[150px] w-auto" alt="success"/>
            </div>
           <div className="text-center">
             <h1 className="text-2xl font-bold my-5 text-green-500">Email verification success!</h1>
             <Button asChild>
                 <Link href={WEBSITE_HOME}>Continue shopping</Link>
             </Button>
           </div>
            </div> 
            :
            <div>
                <div className="flex justify-center items-center">
                  <Image src={verificationFailedImg.src} height={verificationFailedImg.height} width={verificationFailedImg.width} className="h-[150px] w-auto" alt="failed"/>
            </div>
             <div className="text-center">
             <h1 className="text-2xl font-bold my-5 text-red-500">Email verification failed!!</h1>
             <Button asChild>
                 <Link href={WEBSITE_HOME}>Continue shopping</Link>
             </Button>
           </div>
            </div> 
           }
        </CardContent>
    </Card>
  )
};

export default EmailVerification;
