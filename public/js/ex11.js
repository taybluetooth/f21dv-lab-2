/**
 * Author: Callum Taylor
 * Filename: ex11.js
 * License: MIT
 */

/**
 * Exercise 11
 * Adds a mouse over transition to text.
 *
 * @export
 */

export default function exercise11() {
  // Add svg element
  d3.select("body")
    .append("svg")
    .attr("width", "200px")
    .attr("height", "200px");

  // Add text element
  d3.select("svg")
    .append("text")
    .attr("x", "50%")
    .attr("y", "50%")
    .attr("font-size", "16px")
    .style("fill", "black")
    .text("Hello");

  // Animate text
  d3.selectAll("text")
    .on("mouseover", function (event) {
      d3.select(this)
        .transition()
        .duration(1000)
        .attr("font-size", "32px")
        .style("fill", "lightblue");
    })
    .on("mouseout", function () {
      d3.select(this)
        .transition()
        .ease(d3.easeElastic)
        .duration(2000)
        .attr("font-size", "16px")
        .style("fill", "black");
    });
}
