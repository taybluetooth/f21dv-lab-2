/**
 * Author: Callum Taylor
 * Filename: ex23.js
 * License: MIT
 */

import plotWave from "./helpers/plotWave.js";

/**
 * Exercise 23
 * Loads in some test data from a csv and plots the line
 *
 * @export
 */

export default async function exercise23() {
  // Set Dimensions
  const xSize = 600;
  const ySize = 600;
  const margin = 40;
  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;

  // Get File
  let url =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex23.csv";
    // Init data list
  let arr = [];

  // Fetch data from csv asynchronously
  const csv = await d3.csv(url);

  // Add entries to data list
  csv.forEach((data) => {
    arr.push(data.value);
  });

  // 1: Sine Wave
  // 2: Cosine Wave
  // 3: Tangent Wave
  // Calls plot wave helper function
  arr = plotWave(arr, 2);

  // Get the 'limits' of the data - the full extent (mins and max)
  // so the plotted data fits perfectly
  const xExtent = d3.extent(arr, (d) => {
    return d.x;
  });
  const yExtent = d3.extent(arr, (d) => {
    return d.y;
  });

  // Append SVG object to the page
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", xSize)
    .attr("height", ySize)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

  // Add x axis
  const x = d3.scaleLinear().domain([xExtent[0], xExtent[1]]).range([0, xMax]);

  // Add bottom axis
  svg
    .append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x))
    .attr("color", "green"); // make bottom axis green

  // Add top axis
  svg.append("g").call(d3.axisTop(x));

  // Add y axis
  const y = d3.scaleLinear().domain([yExtent[0], yExtent[1]]).range([yMax, 0]);

  // Add left axis
  svg.append("g").call(d3.axisLeft(y));

  // Add right axis
  svg
    .append("g")
    .attr("transform", `translate(${yMax},0)`)
    .call(d3.axisRight(y));

  // Add the line
  svg
    .append("path")
    .datum(arr)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.x);
        })
        .y(function (d) {
          return y(d.y);
        })
    );

    // Set axes text to be black
    svg.selectAll("svg text").style("fill", "black");
}
