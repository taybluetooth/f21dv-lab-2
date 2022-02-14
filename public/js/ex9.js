/**
 * Author: Callum Taylor
 * Filename: ex9.js
 * License: MIT
 */

/**
 * Exercise 9
 * Creates 3 transition effects with different
 * easing methods.
 *
 * @export
 */

// Animation helper function
function animate() {
  // Add div element
  d3.select(".div1")
    .style("background-color", "blue")
    .style("transform", "scale(1.0)")
    .transition()
    .ease(d3.easeBounce)
    .duration(1000)
    .style("background-color", "red")
    .style("transform", "scale(0.5)");
// Add div element
  d3.select(".div2")
    .style("background-color", "red")
    .style("transform", "scale(1.0)")
    .transition()
    .ease(d3.easeCircleIn)
    .duration(1000)
    .style("background-color", "pink")
    .style("transform", "scale(0.5)");

    // Add div element
  d3.select(".div3")
    .style("background-color", "green")
    .style("transform", "scale(1.0)")
    .transition()
    .ease(d3.easeElastic)
    .duration(1000)
    .style("background-color", "purple")
    .style("transform", "scale(0.5)");
}

export default function exercise9() {

  // Add div element
  d3.select("body")
    .append("div")
    .attr("class","div1")
    .style("width", "100px")
    .style("height", "100px")
    .style("background-color", "blue")
    .style("transform", "scale(1.0)")
    .style("display", "inline-block")
    .transition()
    .ease(d3.easeBounce)
    .duration(1000)
    .style("background-color", "red")
    .style("transform", "scale(0.5)");
// Add div element
  d3.select("body")
    .append("div")
    .attr("class","div2")
    .style("width", "200px")
    .style("height", "200px")
    .style("background-color", "red")
    .style("transform", "scale(1.0)")
    .style("display", "inline-block")
    .transition()
    .ease(d3.easeCircleIn)
    .duration(1000)
    .style("background-color", "pink")
    .style("transform", "scale(0.5)");

    // Add div element
  d3.select("body")
    .append("div")
    .attr("class", "div3")
    .style("width", "300px")
    .style("height", "300px")
    .style("background-color", "green")
    .style("transform", "scale(1.0)")
    .style("display", "inline-block")
    .transition()
    .ease(d3.easeElastic)
    .duration(1000)
    .style("background-color", "purple")
    .style("transform", "scale(0.5)");

  // Add button to repeat animation
  d3.select("body")
    .append("button")
    .style("padding", "16px")
    .style("margin-top", "40px")
    .style("background-color", "white")
    .style("color", "black")
    .style("border", "1px solid black")
    .style("border-radius", "8px")
    .style("display", "block")
    .on("click", () => animate())
    .text("Repeat");
}
