export interface EmailData {
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  documentType: string;
  date: string;
  timeSlot: string;
  area: string;
  referralSource?: string;
  additionalDetails?: string;
}

const BRAND_NAVY = "#1B3A6B";
const BRAND_GOLD = "#C9A84C";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "91XXXXXXXXXX";

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getISTTimestamp(): string {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });
}

export function customerConfirmationEmail(data: EmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Appointment Confirmed — Rathi Document Point</title>
</head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(27,58,107,0.1);">
        
        <!-- Header -->
        <tr>
          <td style="background:${BRAND_NAVY};padding:32px 40px;text-align:center;">
            <div style="width:52px;height:52px;border:2px solid ${BRAND_GOLD};border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
              <span style="font-size:22px;">⚖️</span>
            </div>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:22px;color:${BRAND_GOLD};font-weight:700;letter-spacing:-0.01em;">Rathi Document Point</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Gurugram's Most Trusted Legal Document Service</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:24px;color:${BRAND_NAVY};">Appointment Request Received!</h2>
            <p style="margin:0 0 24px;color:#5A5A7A;font-size:15px;line-height:1.6;">Dear <strong>${data.name}</strong>,<br/>Thank you for choosing Rathi Document Point. Your appointment request has been received and we will contact you within <strong>2 hours</strong> to confirm.</p>

            <!-- Summary Box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;border:2px solid ${BRAND_GOLD};border-radius:10px;margin-bottom:28px;">
              <tr><td style="padding:20px 24px;">
                <h3 style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND_GOLD};font-weight:700;">Appointment Summary</h3>
                ${[
                  ["Document Required", data.documentType],
                  ["Preferred Date", formatDate(data.date)],
                  ["Time Slot", data.timeSlot],
                  ["Contact Number", data.phone],
                  ["Your Area", data.area],
                  ["Contact Via", data.contactMethod],
                ]
                  .map(
                    ([label, value]) => `
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
                  <tr>
                    <td style="font-size:13px;color:#5A5A7A;width:140px;vertical-align:top;">${label}</td>
                    <td style="font-size:14px;color:${BRAND_NAVY};font-weight:600;">${value}</td>
                  </tr>
                </table>`
                  )
                  .join("")}
              </td></tr>
            </table>

            <p style="margin:0 0 28px;color:#5A5A7A;font-size:14px;line-height:1.7;background:#F0EAE0;border-radius:8px;padding:16px 20px;border-left:4px solid ${BRAND_GOLD};">
              Our team will call or WhatsApp you at <strong>${data.phone}</strong> within 2 hours during working hours (Mon–Sat, 10 AM – 7 PM).
            </p>

            <!-- WhatsApp CTA -->
            <div style="text-align:center;margin-bottom:32px;">
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20just%20booked%20an%20appointment%20for%20${encodeURIComponent(data.documentType)}%20on%20rathidocumentpoint.in"
                 style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">
                💬 Chat With Us on WhatsApp
              </a>
            </div>

            <hr style="border:none;border-top:1px solid #E2DACE;margin:0 0 24px;" />

            <!-- Footer info -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:13px;color:#5A5A7A;line-height:1.7;">
                  📍 <strong>Address:</strong> Shed no. 6, Tehsil Wazirabad, Sector-57, Gurugram, Haryana - 122001<br/>
                  📞 <strong>Phone:</strong> +91-9910406641 / +91-9911346641<br/>
                  🕐 <strong>Hours:</strong> Monday to Saturday, 09:00 AM – 06:00 PM
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer bar -->
        <tr>
          <td style="background:${BRAND_NAVY};padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.6);">© 2024 Rathi Document Point · rathidocumentpoint.in</p>
            <p style="margin:4px 0 0;font-size:11px;color:rgba(255,255,255,0.4);">This is an automated confirmation. Please do not reply to this email.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function ownerAlertEmail(data: EmailData): string {
  const waMessage = encodeURIComponent(
    `Hello ${data.name}, I am calling from Rathi Document Point regarding your appointment request for ${data.documentType}. Is this a good time to talk?`
  );

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Appointment — Rathi Document Point</title>
</head>
<body style="margin:0;padding:0;background:#0f2548;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f2548;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">
        
        <!-- Header -->
        <tr>
          <td style="background:${BRAND_NAVY};padding:28px 40px;text-align:center;">
            <h1 style="margin:0;font-family:Georgia,serif;font-size:20px;color:${BRAND_GOLD};">🔔 New Appointment Request</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">rathidocumentpoint.in — ${getISTTimestamp()}</p>
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background:#FFF8E7;border-left:4px solid ${BRAND_GOLD};padding:16px 40px;">
            <p style="margin:0;font-size:15px;color:${BRAND_NAVY};font-weight:600;">
              📋 <strong>${data.name}</strong> needs a <strong>${data.documentType}</strong>
            </p>
            <p style="margin:4px 0 0;font-size:13px;color:#5A5A7A;">Requested for ${formatDate(data.date)} · ${data.timeSlot} · ${data.area}</p>
          </td>
        </tr>

        <!-- Details Table -->
        <tr>
          <td style="padding:32px 40px;">
            <h3 style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND_GOLD};">Full Customer Details</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${[
                ["Name", data.name],
                ["Phone", data.phone],
                ["Email", data.email],
                ["Document Required", data.documentType],
                ["Preferred Date", formatDate(data.date)],
                ["Time Slot", data.timeSlot],
                ["Area / Sector", data.area],
                ["Contact Preference", data.contactMethod],
                ["Referral Source", data.referralSource || "—"],
                ["Additional Details", data.additionalDetails || "—"],
                ["Submitted At", getISTTimestamp()],
              ]
                .map(
                  ([label, value], i) => `
              <tr style="background:${i % 2 === 0 ? "#FAF7F2" : "#ffffff"};">
                <td style="padding:10px 14px;font-size:13px;color:#5A5A7A;font-weight:600;width:180px;border-bottom:1px solid #E2DACE;">${label}</td>
                <td style="padding:10px 14px;font-size:14px;color:${BRAND_NAVY};border-bottom:1px solid #E2DACE;">${value}</td>
              </tr>`
                )
                .join("")}
            </table>

            <!-- Action Buttons -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
              <tr>
                <td style="padding-right:8px;">
                  <a href="tel:+91${data.phone}" 
                     style="display:block;text-align:center;background:#1D9E75;color:#ffffff;padding:14px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
                    📞 Call ${data.name}
                  </a>
                </td>
                <td style="padding-left:8px;">
                  <a href="https://wa.me/91${data.phone}?text=${waMessage}"
                     style="display:block;text-align:center;background:#25D366;color:#ffffff;padding:14px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
                    💬 WhatsApp ${data.name}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:${BRAND_NAVY};padding:16px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.6);">Rathi Document Point · rathidocumentpoint.in · Internal Notification</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
