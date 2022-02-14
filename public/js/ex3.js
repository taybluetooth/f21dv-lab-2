/**
 * Author: Callum Taylor
 * Filename: ex3.js
 * License: MIT
 */

/**
 * Exercise 3
 * Adds 10 div elements and sets the top 5 red and bottom 5 green.
 *
 * @export
 */

export default function exercise3() {
  // Generate 10 div elements
  for (var i = 0; i < 10; i++) {
    // Set top 5 red
    if (i < 5) {
      d3.select("body")
        .append("div")
        .text(i + 1)
        .style("color", "red");
      // Set bottom 5 green
    } else if (i >= 5) {
      d3.select("body")
        .append("div")
        .text(i + 1)
        .style("color", "green");
    }
  }
}
