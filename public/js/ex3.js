/**
 * Author: Callum Taylor
 * Filename: ex3.js
 * License: MIT
 */

/**
 * Exercise 3
 * Modifies html elements further upon hover.
 *
 * @export
 */

export default function exercise3() {
  d3.select("body")
    .append("div")
    .style("width", "100px")
    .style("height", "20px")
    .style("background-color", "green");

  d3.selectAll("div")
    .on("mouseover", function (event) {
      d3.select(this)
        .style("background-color", "orange")
        .style("border", "4px solid green")
        .style("padding", "40px");

      // Get current event info
      // Note: d3.event  (event) passed as the first argument to all listeners
      console.log(event);

      // Get x & y co-ordinates
      // Note: d3.mouse was removed in d3v6, you should use d3.pointer(event)
      console.log(d3.pointer(event));
    })
    .on("mouseout", function () {
      d3.select(this)
        .style("background-color", "steelblue")
        .style("border", "4px solid red")
        .style("padding", "20px");
    });
}
