/**
 * Author: Callum Taylor
 * Filename: ex4.js
 * License: MIT
 */

/**
 * Exercise 4
 * Create an svg with a circle and modify it using hover.
 *
 * @export
 */

export default function exercise4() {
  d3.select("body")
    .append("svg")
    .attr("width", "200px")
    .attr("height", "200px");

  d3.select("svg")
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 8)
    .style("fill", "red");

  d3.selectAll("circle")
    .on("mouseover", function (event) {
      d3.select(this).attr("r", 24);

      // Get current event info
      // Note: d3.event  (event) passed as the first argument to all listeners
      console.log(event);

      // Get x & y co-ordinates
      // Note: d3.mouse was removed in d3v6, you should use d3.pointer(event)
      console.log(d3.pointer(event));
    })
    .on("mouseout", function () {
      d3.select(this).attr("r", 8);
    });
}
