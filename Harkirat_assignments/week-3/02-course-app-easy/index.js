import express from "express";
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let courseId = 1;

const checkAdminLogin = (reqAdmin) => {
  const username = reqAdmin.username;
  const password = reqAdmin.password;

  return ADMINS.some(
    (adminUser) =>
      adminUser.username === username && adminUser.password === password,
  );
};
const checkUserLogin = (reqUser) => {
  const username = reqUser.username;
  const password = reqUser.password;
  return USERS.some(
    (userr) => userr.username === username && userr.password === password,
  );
};
// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const existingUser = checkAdminLogin(req.body);
  if (existingUser) {
    req.status(403).json({ message: "Admin already exists" });
  } else {
    const { username, password } = req.body;
    const user = {
      username,
      password,
    };
    ADMINS.push(user);
    res.status(200).json({ message: "admin created successfully" });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  const existingUser = checkAdminLogin(req.headers);
  if (!existingUser) {
    res.status(404).json({ message: "Admin validation Error check the login" });
  } else {
    res.status(200).json({ message: "Admin successfully logged In" });
  }
});

app.post("/admin/courses", (req, res) => {
  // logic to create a course
  const existingUser = checkAdminLogin(req.headers);
  if (!existingUser) {
    res
      .status(404)
      .json({ message: "Admin is not logged is or validation Error" });
  } else {
    const course = req.body;
    course.courseId = courseId;
    COURSES.push(course);
    res.status(200).json({ message: "Course created successfully", courseId });
    courseId++;
  }
});

app.put("/admin/courses/:courseId", (req, res) => {
  const existingUser = checkAdminLogin(req.headers);
  if (!existingUser) {
    res
      .status(404)
      .json({ message: "Admin is not logged is or validation Error" });
  } else {
    const courseId = req.params.courseId;
    const findCourse = COURSES.find((course) => {
      return JSON.stringify(course.courseId) === courseId;
    });
    console.log(findCourse);
    if (!findCourse) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  }
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
  res.status(200).json(COURSES);
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const existingUser = checkUserLogin(req.body);
  console.log(existingUser);
  if (existingUser) {
    res.status(404).json({ message: "User already exists" });
  } else {
    const user = req.body;
    USERS.push(user);
    res.status(200).json({ message: "User created successfully" });
  }
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
