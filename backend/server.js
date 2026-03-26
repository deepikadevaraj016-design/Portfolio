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

    console.log("Incoming origin:", origin); 

    if (!origin) return callback(null, true); 

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    }
    else{
      console.log("Blocked by CORS:", origin);
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
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/tools", require("./routes/toolRoutes"));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`https://portfolio-tfly.onrender.com`));



