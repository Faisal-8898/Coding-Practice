const fs = require("fs");

// Load filtered.json
const filtered = require("./filteredCourseCSE.json");

// Map short days to full
const dayMap = {
  M: "Monday",
  T: "Tuesday",
  W: "Wednesday",
  R: "Thursday",
  F: "Friday",
  S: "Sunday",
};

// Helper: convert 12-hour time to minutes
function getDuration(timeRange) {
  const [start, end] = timeRange.split(" - ").map((t) => {
    const [time, period] = t.split(" ");
    let [hour, min] = time.split(":").map(Number);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    return hour * 60 + min;
  });
  return end - start;
}

// Grouped by section
const grouped = {};

filtered.forEach((entry) => {
  const [dayCodeRaw, ...timeParts] = entry.TimeSlotName.split(" ");
  const time = timeParts.join(" ");
  const duration = getDuration(time);

  const key = `${entry.CourseCode}_${entry.SectionName}_${entry.ShortName}_${time}`;
  const days = dayCodeRaw.split("").map((c) => dayMap[c]);

  const isLab = duration > 90;

  if (!grouped[key]) {
    grouped[key] = {
      type: isLab ? "lab" : "class",
      code: entry.CourseCode,
      sec: entry.SectionName.toString().padStart(2, "0"),
      faculty: entry.ShortName,
      time,
      days,
      duration,
    };
  } else {
    grouped[key].days.push(...days);
  }
});

// Remove duplicate days in each entry
Object.values(grouped).forEach((entry) => {
  entry.days = [...new Set(entry.days)];
});

// Assign IDs and save
const resultArray = Object.values(grouped).map((entry, idx) => ({
  id: idx + 1,
  ...entry,
}));

// Save to course.json
fs.writeFileSync("course.json", JSON.stringify(resultArray, null, 2));

console.log(
  "✅ course.json with separated class/lab entries and duration has been created.",
);
