import express from "express";
import connectDB from "./db/index.js";
import { generateJwtToken } from "./utils/jwt.helper.js";
import { Admin } from "./models/admin.model.js";
const app = express();

app.use(express.json());
connectDB();

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post("/admin/signup", async (req, res) => {
  const admin = req.body;
  const token = await generateJwtToken(admin);
  admin.token = token;
  const newAdmin = new Admin(admin);
  try {
    await newAdmin.save();
  } catch (error) {
    console.error("Admin Data Save Error", error);
  }
  //checking if the admin is already there in database

  res.sendStatus(200);
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
});

app.post("/admin/courses", (req, res) => {
  // logic to create a course
});

app.put("/admin/courses/:courseId", (req, res) => {
  // logic to edit a course
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
});

app.post("/users/login", (req, res) => {
  // logic to log in user
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
