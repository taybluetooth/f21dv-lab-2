/**
 * Author: Callum Taylor
 * Filename: ex31.js
 * License: MIT
 */

/**
 * Exercise 31
 * Adds text item to each arc.
 *
 * @export
 */

export default function exercise31() {
  // Init data list
  var data = [12, 49, 10, 20, 39, 19, 11, 13, 37, 32, 19, 29];

  // Init pie dimensions
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

  // Calculate pie radius
  const radius = Math.min(xSize, ySize) / 2;

  // Init colours
  var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet3);

  // Create pie
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

  // Add text to centre of arcs
  arcs
    .append("text")
    .attr("transform", function (d) {
      d.innerRadius = 0;
      d.outerRadius = radius;
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d, i) {
      return d.value;
    })
    .style("fill", "black")
    .style("font-family", "sans-serif");
}
