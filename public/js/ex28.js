/**
 * Author: Callum Taylor
 * Filename: ex28.js
 * License: MIT
 */

/**
 * Exercise 28
 * Applys a d3 colour method to the bar chart.
 *
 * @export
 */

export default function exercise28() {
  // Init data list
  var data = [5, 10, 12, 6];

  // Init graph dimensions
  var width = 200;
  var scaleFactor = 10;
  var barHeight = 20;

  // Init colour method
  var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet3);

  // Create graph
  var graph = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

  // Create bars
  var bar = graph
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    });

  // Create bars shapes
  bar
    .append("rect")
    .attr("width", function (d) {
      return d * scaleFactor;
    })
    .attr("height", barHeight - 1)
    .style("fill", color);

  // Create labels
  bar
    .append("text")
    .attr("x", function (d) {
      return d * scaleFactor;
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) {
      return d;
    })
    .style("fill", "black");
}
