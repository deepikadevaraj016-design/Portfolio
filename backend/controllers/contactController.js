const addMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message saved successfully!" }); // Respond immediately

    // Send email asynchronously
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    };

    transporter.sendMail(mailOptions)
      .then(info => console.log("Email sent:", info.response))
      .catch(err => console.error("Email error:", err));

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save message" });
  }
};
