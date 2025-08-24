"use client"
import React from 'react'
import ButtonLoading from "@/app/compo/ButtonLoading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zSchema } from "@/lib/zodSchema";
import Logo from "@/public/assets/logo.png";
import { WEBSITE_LOGIN } from "@/routes/website";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import z from "zod";
import axios from 'axios';

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
 const formSchema = zSchema.pick({
    name:true,
  email: true,
  password: true,
}).extend({
    confirmPassword: z.string()
}).refine((data)=> data.password=== data.confirmPassword, {
    message: "Password and Confirm password must be same.",
    path: ['confirmPassword']
})
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSubmit(values) {
    try{
      setLoading(true)
      const {data: registerResponse} = await axios.post('/api/auth/register', values)
      if(!registerResponse.success){
        throw new Error(registerResponse.message)
      }
      form.reset()
      alert(registerResponse.message)
    } catch(err){
    alert(err.message)
  } finally{
    setLoading(false)
  }
  } 
  return (
    <Card className="w-[450px]">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="logo"
            className="max-w-[150px]"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Create Account</h1>
          <p>Create new account by filling out the form below</p>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Abdur Rahman"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Input
                            type="password"
                            placeholder="********"
                            {...field}
                            className="pr-10" // add padding so text doesn’t overlap button
                          />
                         
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                 
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="mt-5">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Input
                            type={isTypePassword ? "password" : "text"}
                            placeholder="********"
                            {...field}
                            className="pr-10" // add padding so text doesn’t overlap button
                          />
                          <button
                            type="button"
                            onClick={() => setIsTypePassword(!isTypePassword)}
                            className="absolute right-3 text-gray-500"
                          >
                            {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                          </button>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-5">
                  <ButtonLoading
                    loading={loading}
                    type="submit"
                    text="Create Account"
                    className="w-full cursor-pointer"
                  />
                </div>
                <div className="text-center mt-1.5">
                  <div className="flex justify-center items-center gap-1">
                    <p>Already have account?</p>
                    <Link href={WEBSITE_LOGIN} className="text-primary underline">Login</Link>
                  </div>
                  
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}

export default RegisterPage
