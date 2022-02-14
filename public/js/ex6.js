/**
 * Author: Callum Taylor
 * Filename: ex6.js
 * License: MIT
 */

/**
 * Exercise 6
 * Div element transitions from blue, to red, to green.
 *
 * @export
 */

// Animation helper function
function animate() {
  d3.select("div")
    .style("background-color", "blue")
    .transition()
    .duration(1000)
    .style("background-color", "red")
    .transition()
    .duration(3000)
    .style("background-color", "green");
}

export default function exercise6() {
  // Change color over transition time.
  d3.select("body")
    .append("div")
    .style("width", "100px")
    .style("height", "100px")
    .style("background-color", "blue")
    .transition()
    .duration(2000)
    .style("background-color", "red")
    .transition()
    .duration(3000)
    .style("background-color", "green");

  // Add button to repeat animation
  d3.select("body")
    .append("button")
    .style("padding", "16px")
    .style("margin-top", "8px")
    .style("background-color", "white")
    .style("color", "black")
    .style("border", "1px solid black")
    .style("border-radius", "8px")
    .on("click", () => animate())
    .text("Repeat");
}
