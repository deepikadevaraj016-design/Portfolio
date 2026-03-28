const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://deepika-mern-portfolio.pages.dev",
  "https://deepika-mern-portfolio.vercel.app",
  "https://deepika-mern-portfolio.netlify.app",
  
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); 
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    }
    else{
      console.log(" Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ ADD THIS HERE
const Project = require("./models/Project");
const Skill = require("./models/Skill");
const Tool = require("./models/Tool");

app.get("/api/all-data", async (req, res) => {
  try {
    const projects = await Project.find();
    const skills = await Skill.find();
    const tools = await Tool.find();

    res.set("Cache-Control", "public, max-age=300");

    res.json({
      projects,
      skills,
      tools
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`https://portfolio-tfly.onrender.com`));



