/**
 * Author: Callum Taylor
 * Filename: ex7.js
 * License: MIT
 */

/**
 * Exercise 7
 * Changes div size as well as color.
 * @export
 */

// Animation helper function
function animate() {
  d3.select("div")
    .style("background-color", "blue")
    .style("width", "100px")
    .style("height", "100px")
    .transition()
    .duration(2000)
    .style("background-color", "red")
    .style("width", "400px")
    .transition()
    .duration(3000)
    .style("background-color", "green")
    .style("height", "400px");
}

export default function exercise7() {
  // Change color over transition time.
  d3.select("body")
    .append("div")
    .style("width", "100px")
    .style("height", "100px")
    .style("background-color", "blue")
    .transition()
    .duration(2000)
    .style("background-color", "red")
    .style("width", "400px")
    .transition()
    .duration(3000)
    .style("background-color", "green")
    .style("height", "400px");

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
