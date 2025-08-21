import { email, z } from 'zod'

export const zSchema = z.object({
    email: z
        .string()
        .trim()
        .email({message:"Invalid email address"}),

    password: z
          .string()
  .min(8, "Password must be at least 8 characters")
  .max(72, "Password must be at most 72 characters") // good for bcrypt limits
  .regex(/[A-Z]/, "Include at least one uppercase letter")
  .regex(/[a-z]/, "Include at least one lowercase letter")
  .regex(/[0-9]/, "Include at least one number")
  .regex(/[^A-Za-z0-9]/, "Include at least one special character")
  .refine((v) => !/\s/.test(v), "No spaces are allowed"),    
})