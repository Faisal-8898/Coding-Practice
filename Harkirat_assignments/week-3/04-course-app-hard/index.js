import express from "express";
import connectDB from "./db/index.js";
import { generateJwtToken } from "./utils/jwt.helper.js";
import { validationJwtToken } from "./middlewares/authjwt.js";
import { Admin } from "./models/admin.model.js";
import { Course } from "./models/Course.model.js";

const app = express();

app.use(express.json());
connectDB();

// Admin routes
app.post("/admin/signup", async (req, res) => {
  const admin = req.body;
  const existAdmin = Admin.findOne({ username: admin.username });
  if (existAdmin) {
    res.status("409").json({ message: "Admin already exists" });
  }
  const token = await generateJwtToken(admin);
  admin.token = token;
  const newAdmin = new Admin(admin);
  try {
    await newAdmin.save();
  } catch (error) {
    console.error("Admin Data Save Error", error);
  }
  //checking if the admin is already there in database
  res.status(201).json({ message: "Admin created successfully", token });
});

app.post("/admin/login", async (req, res) => {
  // logic to log in admin
  const { username, password } = req.headers;
  try {
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res
        .status(403)
        .json({ message: "Invalid Admin username or password " });
    }
    const token = await generateJwtToken({
      username: admin.username,
      password: admin.password,
    });
    admin.token = token;
    await admin.save();
    res.sendStatus(201);
  } catch (error) {
    console.error("Database internal problem", error.message);
  }
});

app.post("/admin/courses", validationJwtToken, async (req, res) => {
  // logic to create a course
  const course = req.body;
  const newCourse = new Course(course);
  try {
    await newCourse.save();
  } catch (error) {
    console.error("Error in Creating Course in database");
    res.status(302).json({ message: "Couldn't save course in database" });
  }
  res.status(201).json({ message: "Course Created successfully" });
});

app.put("/admin/courses/:courseId", async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {
    new: true,
  });
  if (course) {
    res.status(201).json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
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
