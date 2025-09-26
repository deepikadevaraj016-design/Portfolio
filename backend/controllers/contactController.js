const Message = require("../models/Message");
const nodemailer = require("nodemailer");

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ message: err.message });
  }
};

const addMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log("Message saved to database:", newMessage);

    // Configure transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER, // sender must match your Gmail account
      to: process.env.EMAIL_USER,   // send to yourself
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Message saved but failed to send email." });
      } else {
        console.log("Email sent:", info.response);
        res.status(201).json({ message: "Message sent successfully!" });
      }
    });

  } catch (err) {
    console.error("Error in addMessage:", err);
    res.status(500).json({ message: "Failed to send message." });
  }
};

module.exports = { getMessages, addMessage };
