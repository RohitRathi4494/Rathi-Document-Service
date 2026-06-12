import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";
import { transporter } from "@/lib/mailer";
import { customerConfirmationEmail, ownerAlertEmail } from "@/lib/emailTemplates";

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
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "noreply@rathidocuments.in";
    const ownerEmail = process.env.OWNER_EMAIL || "owner@rathidocuments.in";
    const mailSender = process.env.SMTP_USER || fromEmail;

    // Send emails — but don't block success if email fails
    try {
      // Customer confirmation
      await transporter.sendMail({
        from: `"Rathi Document Services" <${mailSender}>`,
        to: data.email,
        subject: "Your Appointment is Confirmed — Rathi Document Services",
        html: customerConfirmationEmail(data),
      });

      // Owner alert
      await transporter.sendMail({
        from: `"Rathi Document Services Website" <${mailSender}>`,
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
