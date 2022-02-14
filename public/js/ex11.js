/**
 * Author: Callum Taylor
 * Filename: ex11.js
 * License: MIT
 */

/**
 * Exercise 11
 * Draws an svg square shape.
 * 
 * @export
 */

export default function exercise11 () {
  // Create SVG element
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", "1px solid green");

  // Create line elements inside SVG to form square
  svg
    .append("line")
    .attr("stroke", "blue")
    .attr("x1", 100)
    .attr("x2", 200)
    .attr("y1", 100)
    .attr("y2", 100);

  svg
    .append("line")
    .attr("stroke", "red")
    .attr("x1", 200)
    .attr("x2", 200)
    .attr("y1", 100)
    .attr("y2", 200);

  svg
    .append("line")
    .attr("stroke", "purple")
    .attr("x1", 200)
    .attr("x2", 100)
    .attr("y1", 200)
    .attr("y2", 200);

  svg
    .append("line")
    .attr("stroke", "green")
    .attr("x1", 100)
    .attr("x2", 100)
    .attr("y1", 200)
    .attr("y2", 100);
};
