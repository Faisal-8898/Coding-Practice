const course = {
  courseNamme: "backend trip",
  courseInstructor: "Faisal Ahmed",
  courseDuration: "6 month",
};

const arr = [1, 2, 3, 4, 5];
const [a, b, c, ...rest] = arr;

console.log(a, b);

const { courseInstructor: Instructor } = course;
console.log(Instructor);
