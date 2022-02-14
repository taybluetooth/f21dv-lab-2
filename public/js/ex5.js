/**
 * Author: Callum Taylor
 * Filename: ex5.js
 * License: MIT
 */

/**
 * Exercise 5
 * Appends a div to the DOM and sets its contents to be 'Hello World' and green.
 *
 * @export
 */

export default function exercise5() {
  d3.select("body")
    .append("svg")
    .attr("width", "500px")
    .attr("height", "500px");

  // Create text on mouse move
  d3.select("svg").on("mousemove", function (event) {
    d3.selectAll("text").remove();

    d3.select(this)
      .append("text")
      .attr("x", d3.pointer(event)[0])
      .attr("y", d3.pointer(event)[1])
      .attr("dy", ".35em")
      .text("Hello!");
  });
}
