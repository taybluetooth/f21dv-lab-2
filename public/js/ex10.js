/**
 * Author: Callum Taylor
 * Filename: ex10.js
 * License: MIT
 */

/**
 * Exercise 10
 * Circle changes size on mouse move with a transition.
 *
 * @export
 */

export default function exercise10() {
  // Add svg element
  d3.select("body")
    .append("svg")
    .attr("width", "200px")
    .attr("height", "200px");

  // Add circle element
  d3.select("svg")
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 16)
    .style("fill", "red")
    .style("stroke", "black");

  // Animate circle
  d3.selectAll("circle")
    .on("mouseover", function (event) {
      d3.select(this).transition().duration(2000).attr("r", 40);
    })
    .on("mouseout", function () {
      d3.select(this)
        .transition()
        .ease(d3.easeBounce)
        .duration(2000)
        .attr("r", 16);
    });
}
