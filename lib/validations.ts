import { z } from "zod";

const indianMobileRegex = /^[6-9]\d{9}$/;

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, { error: "Name must be at least 2 characters" })
    .max(80, { error: "Name too long" }),
  phone: z
    .string()
    .regex(indianMobileRegex, { error: "Enter a valid 10-digit Indian mobile number" }),
  email: z.email({ error: "Enter a valid email address" }),
  contactMethod: z.enum(["WhatsApp", "Call", "Email"], {
    error: "Please select a contact method",
  }),
  documentType: z.string().min(1, { error: "Please select a document type" }),
  date: z
    .string()
    .min(1, { error: "Please select a date" })
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Date must be today or in the future"),
  timeSlot: z.string().min(1, { error: "Please select a time slot" }),
  area: z.string().min(1, { error: "Please enter your area/sector" }),
  referralSource: z.string().optional(),
  additionalDetails: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const documentTypes = [
  "Rent Agreement",
  "Lease Agreement",
  "Affidavit",
  "General Power of Attorney (GPA)",
  "Special Power of Attorney (SPA)",
  "Sale Deed",
  "Agreement to Sell",
  "Relinquishment Deed",
  "Will / Vasiyatnama",
  "Indemnity Bond",
  "NOC (No Objection Certificate)",
  "Court / Income Affidavit",
  "Other (specify below)",
];

export const timeSlots = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 7:00 PM",
];
