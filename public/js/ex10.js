/**
 * Author: Callum Taylor
 * Filename: ex10.js
 * License: MIT
 */

// Import helper function
import getHFAgeCount from "./helpers/getHFAgeCount.js";

/**
 * Exercise 10
 * Uses above helper function to display the counts as paragraphs in the DOM.
 *
 * @export
 */

export default async function exercise10() {
  const ageCount = await getHFAgeCount();

  // Create HTML elements programatically
  for (var i = 0; i < 4; i++) {
    d3.select("body").append("p");
  }

  // Add data to paragraphs
  var p = d3
    .select("body")
    .selectAll("p")
    .data(ageCount)
    .text(function (d, i) {
      return d.label + ": " + d.count;
    });
}
