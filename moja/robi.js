import fs from "fs";
import fetch from "node-fetch";

async function numberShot() {
  for (let i = 0; i <= 999999; i += 10) {
    let number = i.toString().padStart(6, "0");
    console.log(number);
    await sendMsisdnData("8801886" + number, "ROBI", "PREPAID");
  }
}

async function sendMsisdnData(msisdn, brand, simCategory) {
  const url = "https://da-api.robi.com.bd/da-nll/free-msisdn/get-msisdn-list";
  const data = { msisdn, brand, simCategory };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result.freeMsisdnList && result.freeMsisdnList.length > 0) {
      result.freeMsisdnList.forEach((item) => {
        console.log(item);
        fs.appendFileSync("robiNumbersnd.txt", item + "\n", "utf8");
      });
    } else {
      console.log("No free MSISDNs available.");
    }
  } catch (error) {
    console.error("Error sending request:", error);
  }
}

numberShot().catch(console.error);
