import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";
import { transporter } from "@/lib/mailer";
import { ownerAlertEmail } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation
    const validation = appointmentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const ownerEmail = process.env.OWNER_EMAIL || "rathigurugram@gmail.com";
    const mailSender = process.env.SMTP_USER || "rathidocumentpoint@gmail.com";

    // Send appointment details to owner only
    try {
      await transporter.sendMail({
        from: `"Rathi Document Point Website" <${mailSender}>`,
        to: ownerEmail,
        subject: `🔔 New Appointment Request — ${data.documentType} — ${data.name}`,
        html: ownerAlertEmail(data),
      });
    } catch (emailError) {
      // Log email error but still return success to user
      console.error("[EMAIL ERROR]", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
