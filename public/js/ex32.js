/**
 * Author: Callum Taylor
 * Filename: ex32.js
 * License: MIT
 */

/**
 * Exercise 32
 * Adds image to background of bars.
 *
 * @export
 */

export default function exercise32() {
  // Init data list
  var data = [5, 10, 12, 6];

  // Init graph dimensions
  var width = 200;
  var scaleFactor = 10;
  var barHeight = 20;

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
    .attr("height", barHeight - 1);

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
    });

  // Add image to background attribute of graph
  graph
    .style("background", "url(img/sun.svg) no-repeat")
    .style("background-position", "center");
}
