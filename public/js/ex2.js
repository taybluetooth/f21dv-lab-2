/**
 * Author: Callum Taylor
 * Filename: ex2.js
 * License: MIT
 */

/**
 * Exercise 2
 * Create HTML elements dynamically then
 * display extra information when hovering them.
 *
 * @export
 */

export default function exercise2() {
  // Create HTML elements programatically
  // Classed adds class selector to element
  d3.select("body").append("button").classed("button1", true).text("Hover me!");
  d3.select("body").append("button").classed("button2", true).text("Me too!");

  d3.selectAll("button")
    .style("padding", "16px")
    .style("background-color", "blue")
    .style("color", "white")
    .style("border-radius", "8px")
    .style("border", "none")
    .style("margin-top", "16px")
    .style("display", "block");

  d3.select(".button1").on("mouseover", function (d, i) {
    d3.select(this).style("padding", "60px").style("background-color", "red").text("I am big!");
  });

  d3.select(".button1").on("mouseout", function (d, i) {
    d3.select(this).style("padding", "16px").style("background-color", "blue").text("Hover me!");
  });

  d3.select(".button2").on("mouseover", function (d, i) {
    d3.select(this).style("background-color", "pink").text("I am pink!");
  });

  d3.select(".button2").on("mouseout", function (d, i) {
    d3.select(this).style("background-color", "blue").text("Me too!");
  });
}
