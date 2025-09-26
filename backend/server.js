const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Allow localhost (dev) AND Netlify frontend
const allowedOrigins = [
  "http://localhost:3000",
  "https://deepika-mern-portfolio.netlify.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman, mobile apps)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/tools", require("./routes/toolRoutes"));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
