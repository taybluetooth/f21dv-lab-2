/**
 * Author: Callum Taylor
 * Filename: getHFAgeCount.js
 * License: MIT
 */

/**
 * getHFAgeCount
 * Helper function which gets the ages of each category
 * who have sadly passed away due to heart failure.
 * Returns this data as a list of objects.
 * 
 * @return {*} ageCount
 * @export
 */

 export default async function getHFAgeCount() {
    // Init csv path
    let heartfailurecsv =
      "https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv";
  
    // Init list to hold ages and their count
    let ageCount = [
      { label: "1-30", count: 0 },
      { label: "31-40", count: 0 },
      { label: "41-60", count: 0 },
      { label: "61-100", count: 0 },
    ];
  
    // Temp storage array for ages
    let arr = [];
  
    // Fetch data from csv
    const data = await d3.csv(heartfailurecsv);
  
    // Parse data and process ages into temp array
    data.forEach((entry) => {
      arr.push(entry.age);
    });
  
    // Divide ages into their own categories
    arr.forEach((entry) => {
      if (entry >= 1 && entry <= 30) {
        ageCount[0].count += 1;
      } else if (entry >= 31 && entry <= 40) {
        ageCount[1].count += 1;
      } else if (entry >= 41 && entry <= 60) {
        ageCount[2].count += 1;
      } else if (entry >= 61 && entry <= 100) {
        ageCount[3].count += 1;
      }
    });
  
    return ageCount;
  };