import { NextResponse } from "next/server";
import { sendMail } from "@/lib/sendMail";

export async function GET() {
  try {
    const result = await sendMail(
      "🔔 Test Email from Next.js",
      "adrahman117@gmail.com", // <— replace with a mailbox you can check
      "<p>Hello! ✅ This is a test email sent from Nodemailer in Next.js.</p>"
    );

    if (result.success) {
      return NextResponse.json({ ok: true, message: "Email sent successfully ✅" });
    } else {
      return NextResponse.json({ ok: false, message: result.message });
    }
  } catch (err) {
    return NextResponse.json({ ok: false, message: err.message });
  }
}
