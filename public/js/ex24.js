/**
 * Author: Callum Taylor
 * Filename: ex24.js
 * License: MIT
 */

import plotWave from "./helpers/plotWave.js";
import drawWave from "./helpers/drawWave.js";

/**
 * Exercise 24
 * Draws multiple lines on the same chart.
 *
 * @export
 */

export default async function exercise24() {
  // Set Dimensions
  const xSize = 600;
  const ySize = 600;
  const margin = 40;
  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;
  // Get the 'limits' of the data - the full extent (mins and max)
  // so the plotted data fits perfectly

  // Append SVG Object to the Page
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", xSize)
    .attr("height", ySize)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

  // Get File
  let url =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex23.csv";

  // Declare separate data lists
  let arr = [];
  let arr2 = [];

  // Fetch data from csv asynchronously
  const csv = await d3.csv(url);

  // Add data to lists
  csv.forEach((data) => {
    arr.push(data.value);
    arr2.push(data.value);
  });

  // 1: Sine Wave
  // 2: Cosine Wave
  // 3: Tangent Wave
  arr = plotWave(arr, 3);
  arr2 = plotWave(arr2, 2);

  // Draw waves
  drawWave(arr, svg, xMax, yMax, "gold");
  drawWave(arr2, svg, xMax, yMax, "red");
}
