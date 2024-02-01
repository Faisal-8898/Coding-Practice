const axios = require("axios");
const fs = require("fs").promises;

async function fetchDataAndSave() {
  const allData = [];

  for (let i = 0; i <= 350; i++) {
    const studentId = `2022-2-60-${i}`;
    const url = `https://portal.ewubd.edu/api/DegreeReview/GetAllTransferAndWaiverCourses?studentId=2022-{studentId}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      allData.push({ studentId, data });

      console.log(`Data fetched for ${studentId}`);
    } catch (error) {
      console.error(`Error fetching data for ${studentId}: ${error.message}`);
    }
  }

  // Save allData to a single file
  try {
    const fileName = "current_batch.txt";
    await fs.writeFile(fileName, JSON.stringify(allData, null, 2));

    console.log(`All data saved to ${fileName}`);
  } catch (error) {
    console.error(`Error saving data to file: ${error.message}`);
  }
}

string a = ;
string ans = hello() + "world";

fetchDataAndSave();
