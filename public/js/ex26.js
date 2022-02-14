/**
 * Author: Callum Taylor
 * Filename: ex26.js
 * License: MIT
 */

// Import modules
import drawWave from "./helpers/drawWave.js";
import plotWave from "./helpers/plotWave.js";
import plotPoints from "./helpers/plotPoints.js";

/**
 * Exercise 26
 * Plots two lines on the same graph and marks data points as circles and triangles.
 * @export
 */

export default async function exercise26() {
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

  let arr = [10, 20, 40, 13, 23, 56, 90];
  let arr2 = [90, 30, 40, 432, 100, 390, 30, 200, 1289];

  // 1: Sine Wave
  // 2: Cosine Wave
  // 3: Tangent Wave
  let pos = plotWave(arr, 1);
  let pos2 = plotWave(arr2, 2);

  drawWave(pos, svg, xMax, yMax, "gold");
  drawWave(pos2, svg, xMax, yMax, "red");

  plotPoints(arr, pos, svg, xMax, yMax);
  plotPoints(arr2, pos2, svg, xMax, yMax, "triangle", "blue");
}
