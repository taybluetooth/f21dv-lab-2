/**
 * Author: Callum Taylor
 * Filename: ex27.js
 * License: MIT
 */
import drawWave from "./helpers/drawWave.js";
import plotWave from "./helpers/plotWave.js";
import plotPoints from "./helpers/plotPoints.js";

/**
 * Exercise 27
 * Add ‘text’ to certain points on the line plot.
 * @export
 */

export default function exercise27() {
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

  drawWave(pos, svg, xMax, yMax, "gold");

  plotPoints(arr, pos, svg, xMax, yMax);
}
