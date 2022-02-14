/**
 * Author: Callum Taylor
 * Filename: ex30.js
 * License: MIT
 */

/**
 * Exercise 30
 * Adds more data values
 *
 * @export
 */

export default function exercise30() {
  // Init extended data list
  var data = [3, 4, 8, 12, 49, 10, 20, 39, 19, 11, 3, 7, 2, 19, 29];

  // Create pie dimenisons
  const xSize = 400;
  const ySize = 400;
  const margin = 40;
  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;

  // Append SVG Object to the Page
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", xSize)
    .attr("height", ySize)
    .append("g")
    .attr("transform", "translate(" + xSize / 2 + "," + ySize / 2 + ")");

  // Calculate radius
  const radius = Math.min(xSize, ySize) / 2;

  // Init colours
  var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet3);

  // Generate the pie
  var pie = d3.pie();

  // Generate the arcs
  var arc = d3.arc().innerRadius(0).outerRadius(radius);

  // Generate groups
  var arcs = svg
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  // Draw arc paths
  arcs
    .append("path")
    .attr("fill", function (d, i) {
      return color(i);
    })
    .attr("d", arc);
}
