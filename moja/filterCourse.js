const fs = require('fs');
const XLSX = require('xlsx');

// Step 1: Read and parse the course.json file
const rawData = fs.readFileSync('filteredCourseCSE.json');
const courses = JSON.parse(rawData);

// Step 2: Filter only required fields
const filteredCourses = courses.map(course => ({
    CourseCode: course.CourseCode,
    ShortName: course.ShortName,
    SectionName: course.SectionName,
    TimeSlotName: course.TimeSlotName,
    RoomCode: course.RoomCode,
    SeatCapacity: course.SeatCapacity,
}));

// Step 3: Convert JSON to worksheet
const worksheet = XLSX.utils.json_to_sheet(filteredCourses, {
    header: [
        "CourseCode", "ShortName", "SectionName", "TimeSlotName", "RoomCode", "SeatCapacity"
    ]
});

// Step 4: Add a header row with bold styling (optional but nice)
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "FilteredCourses");

// Step 5: Write the Excel file
XLSX.writeFile(workbook, 'filteredCourse.xlsx');

console.log('Excel file generated: filteredCourse.xlsx');
