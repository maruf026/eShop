"use client";
import ButtonLoading from "@/app/compo/ButtonLoading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zSchema } from "@/lib/zodSchema";
import Logo from "@/public/assets/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

function LoginPage() {
  const [loading, setLoading]= useState(false)
  const formSchema = zSchema.pick({
    email: true,
    
  }).extend({
    password: z.string().min('3', 'password is required.')
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(values) {
    console.log(values)
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
          <h1 className="text-3xl font-semibold">Login Into Account</h1>
          <p>Login into your account by filling out the form below</p>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              
            >
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
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-5">
                <ButtonLoading loading={loading} type="submit" text="Login" className="w-full cursor-pointer"/>
              </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
