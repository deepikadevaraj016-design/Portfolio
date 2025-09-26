const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL?.trim();
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD?.trim();
    const JWT_SECRET = process.env.JWT_SECRET || "defaultSecret";

    // Debug logs
    console.log("---- LOGIN ATTEMPT ----");
    console.log("From frontend email:", email);
    console.log("From frontend password:", password);
    console.log("From env email:", JSON.stringify(ADMIN_EMAIL));
    console.log("From env password:", JSON.stringify(ADMIN_PASSWORD));
    console.log("-----------------------");

    if (email.trim() !== ADMIN_EMAIL) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (password.trim() !== ADMIN_PASSWORD) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: ADMIN_EMAIL, role: "admin" }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, admin: { email: ADMIN_EMAIL } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { adminLogin };
