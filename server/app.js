import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import staffRouter from "./routes/staff.routes.js";
import galleryRouter from "./routes/gallery.routes.js";
import blogRouter from "./routes/blog.routes.js";
import rezervationsRouter from "./routes/reservations.routes.js";
import "./config/passport-jwt-strategy.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());

// Body parser middleware
app.use(bodyParser.json());

// add environment variables
const DATABASE_URL = process.env.DATABASE_URL;
const port = process.env.PORT;

// cors policy configuration
const corsOptions = {
  origin: process.env.FRONTEND_HOST,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// connect to the database
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());

// Cookie Parser
app.use(cookieParser());

// routes
app.use("/api/gallery", galleryRouter);
app.use('/api/blogs', blogRouter);
app.use("/api/account", authRouter);
app.use("/api/staff", staffRouter);
app.use("/api/reservations", rezervationsRouter);
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
