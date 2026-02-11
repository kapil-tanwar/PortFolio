import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();


app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://port-folio-mqvn.vercel.app/",
    ],
    methods: ["GET", "POST"],
  })
);



const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: "Too many requests. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, phoneNO, email, subject, message } = req.body;

  if (!firstName || !lastName || !phoneNO || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (!/^\d{10}$/.test(phoneNO)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  try {
    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: [process.env.EMAIL],

      replyTo: email,
      subject: subject || "New Portfolio Message",
      html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phoneNO}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
    });

    console.log("RESEND RESPONSE:", response);

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

