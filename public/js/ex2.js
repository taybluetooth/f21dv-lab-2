/**
 * Author: Callum Taylor
 * Filename: ex2.js
 * License: MIT
 */

/**
 * Exercise 2
 * Changes other style properties of the paragraph tag.
 *
 * @export
 */

export default function exercise2() {
  // Create HTML elements programatically
  // Classed adds class selector to element
  d3.select("body").append("p").classed("p1", true).text("First paragraph");
  d3.select("body").append("p").text("Second paragraph");

  // Selects paragraph and styles it accordingly
  d3.selectAll("p")
    .style("color", "blue")
    .style("font-size", "20px")
    .style("font-family", "sans-serif")
    .style("line-height", "8px");

  // Selects paragraph with .p1 class attribute and styles it accordingly
  d3.select(".p1").style("text-decoration", "underline");
}
