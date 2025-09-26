import Message from "../models/Message.js";
import nodemailer from "nodemailer";

// Get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ message: err.message });
  }
};

// Add a new message
export const addMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save message to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message saved successfully!" });

    // Send email asynchronously
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email
      replyTo: email,               // User's email
      to: process.env.EMAIL_USER,   // Your email
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr);
    }
  } catch (err) {
    console.error("Failed to save message:", err);
    res.status(500).json({ message: "Failed to save message" });
  }
};
