
import { emailVerificationLink } from "@/email/emailVerificationLink";
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
import { zSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";
import { SignJWT } from "jose";

export async function POST(request) {
  try {
    await connectDB();

    // 1️⃣ Validate input
    const validationSchema = zSchema.pick({
      name: true,
      email: true,
      password: true,
    });

    const payload = await request.json();
    const validatedData = validationSchema.safeParse(payload);

    if (!validatedData.success) {
      console.log("Validation failed:", validatedData.error);
      return response(
        false,
        401,
        "Invalid or missing input field.",
        validatedData.error
      );
    }

    const { name, email, password } = validatedData.data;

    // 2️⃣ Check if user already exists
  const existingUser = await UserModel.findOne({ email });
if (existingUser) {
  if (!existingUser.isVerified) {
    console.log("Resending verification email to existing unverified user:", email);

    // generate token
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);
    const token = await new SignJWT({ userId: existingUser._id })
      .setIssuedAt()
      .setExpirationTime("1h")
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret);

    const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email/${token}`;
    console.log("Verification URL:", verificationUrl);

    // send mail
    const mailResult = await sendMail(
      "Email verification request from eShop",
      email,
      emailVerificationLink(verificationUrl)
    );

    if (!mailResult.success) {
      console.error("Verification mail failed:", mailResult.message);
      return response(false, 500, "Could not send verification email. Please try again.");
    }

    return response(true, 200, "Verification email resent. Please check your inbox.");
  }

  return response(false, 409, "User already registered.");
}


    // 3️⃣ Create new user (not verified yet)
    const newUser = new UserModel({
      name,
      email,
      password,
      isVerified: false,
    });
    await newUser.save();
    console.log("New user created:", newUser._id);

    // 4️⃣ Generate verification token
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);
    const token = await new SignJWT({ userId: newUser._id.toString() })
      .setIssuedAt()
      .setExpirationTime("1h")
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret);

    const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}`;
    console.log("Verification URL:", verificationUrl);

    // 5️⃣ Send verification email
    const mailResult = await sendMail(
      "Email verification request from Abdur Rahman",
      email,
      emailVerificationLink(verificationUrl)
    );

    if (!mailResult.success) {
      console.error("Verification mail failed:", mailResult.message);
      // 6️⃣ Rollback user if email fails
      await UserModel.findByIdAndDelete(newUser._id);
      return response(
        false,
        500,
        "Could not send verification email. Please try again."
      );
    }

    console.log("Verification email sent successfully ✅");

    // 7️⃣ Return success
    return response(
      true,
      200,
      "Registration successful. Please verify your email address."
    );
  } catch (err) {
    console.error("Registration error:", err);
    return catchError(err);
  }
}
