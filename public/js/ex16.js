/**
 * Author: Callum Taylor
 * Filename: ex16.js
 * License: MIT
 */

/**
 * Exercise 16
 * Adds additional shapes to concept.
 *
 * @export
 */

export default function exercise16() {
  // Init dimensions
  const width = 500;
  const height = 500;

  // Init data list
  const data = [10, 15, 20, 25, 30];
  // Declare colours
  const colors = ["#ffffcc", "red", "rgb(0,255,0)", "#31a354", "#006837"];

  // Create svg
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create grouping
  const g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0,0)";
    });

  // Create circle
  g.append("circle")
    .attr("cx", function (d, i) {
      return i * 100 + 50;
    })
    .attr("cy", function (d, i) {
      return 100;
    })
    .attr("r", function (d) {
      return d * 1.5;
    })
    .attr("fill", function (d, i) {
      return colors[i];
    });

  // Create rectangle
  g.append("rect")
    .attr("width", function (d, i) {
      return d * 1 + 50;
    })
    .attr("height", function (d, i) {
      return d * 1 + 50;
    })
    .attr("x", function (d, i) {
      return i * 100;
    })
    .attr("y", function (d) {
      return 300;
    })
    .attr("fill", function (d, i) {
      return colors[i];
    });

  // Create text
  g.append("text")
    .attr("x", function (d, i) {
      return i * 100 + 40;
    })
    .attr("y", 105)
    .attr("stroke", "teal")
    .attr("font-size", "12px")
    .attr("font-family", "sans-serif")
    .text(function (d) {
      return d;
    });

  // Create text
  g.append("text")
    .attr("x", function (d, i) {
      return i * 100 + 40;
    })
    .attr("y", 350)
    .attr("stroke", "teal")
    .attr("font-size", "12px")
    .attr("font-family", "sans-serif")
    .text(function (d) {
      return d;
    });
}
