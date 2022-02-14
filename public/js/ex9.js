/**
 * Author: Callum Taylor
 * Filename: ex9.js
 * License: MIT
 */

/**
 * Exercise 9
 * Counts how many names include Mr. or Mrs. etc.
 * Also prints out other column data.
 * 
 * @export
 */

export default async function exercise9()  {
  // Init csv path
  const titaniccsv =
    "https://raw.githubusercontent.com/dsindy/kaggle-titanic/master/data/test.csv";
  
  // Init titles list
  const titles = [
    { title: "Mr.", num: 0 },
    { title: "Master.", num: 0 },
    { title: "Mrs.", num: 0 },
    { title: "Miss.", num: 0 },
  ];

  // Init genders list
  const genders = [
    { sex: "Male", num: 0 },
    { sex: "Female", num: 0 },
  ];

  // Fetch data asynchronously from csv
  const data = await d3.csv(titaniccsv);

  // Count titles
  data.forEach((entry) => {
    titles.forEach((count) => {
      if (entry.Name.includes(count.title)) {
        count.num++;
      }
    });
  });

  // Count genders
  data.forEach((entry) => {
    genders.forEach((count) => {
      if (entry.Sex === count.sex.toLowerCase()) {
        count.num++;
      }
    });
  });

  // Print titles
  titles.forEach((count) => {
    d3.select("body").append("p").text(`${count.title}: ${count.num}`)
    console.log(count.title + ": " + count.num);
  });

  // Print genders
  genders.forEach((count) => {
    d3.select("body").append("p").text(`${count.sex}: ${count.num}`)
    console.log(count.sex + ": " + count.num);
  });
};
