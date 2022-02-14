/**
 * Author: Callum Taylor
 * Filename: ex4.js
 * License: MIT
 */

// Import exercise 3;
import exercise3 from "./ex3.js";

/**
 * Exercise 4
 * Selects first div element, make it purple and set its contents to 'Start'
 *
 * @export
 */

export default function exercise4() {
  // Call exercise 3 first to ensure elements exist
  exercise3();
  // Select all divs but limit to first
  d3.selectAll("div")
    .filter(function () {
      return d3.select(this).text() == 1;
    })
    // Set text to be 'Start' and purple
    .text("Start")
    .style("color", "purple");
}
