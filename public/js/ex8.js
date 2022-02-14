/**
 * Author: Callum Taylor
 * Filename: ex8.js
 * License: MIT
 */

/**
 * Exercise 8
 * Changes div element only when mouse is over.
 *
 * @export
 */

// Animation helper function
function animate() {
  d3.select("div")
    .style("background-color", "red")
    .transition()
    .duration(2000)
    .style("background-color", "yellow")
    .transition()
    .duration(3000)
    .style("background-color", "purple");
}

export default function exercise8() {
  // Change color over transition time.
  d3.select("body")
    .append("div")
    .style("width", "100px")
    .style("height", "100px")
    .style("background-color", "red")
    .on("mouseover", () => animate());

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
