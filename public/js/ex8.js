/**
 * Author: Callum Taylor
 * Filename: ex8.js
 * License: MIT
 */

/**
 * Exercise 8
 * Uses span tags instead of paragraphs as specified in the example.
 * If it is a char, displays it as blue, if num, displays it as green.
 * 
 * @export
 */

export default function exercise8 () {
  // Declare data
  var myData = ["a", 4, 1, "b", 6, 2, 8, 9, "z"];

  // Create spans for each data entry
  var p = d3
    .select("body")
    .selectAll("span")
    .data(myData)
    .enter()
    .append("span")
    .style("color", function (d, i) {
      // JS has no char type
      // Will check if string and length 1
      // If char set blue, if num set green
      if (typeof d == "string" && d.length == 1) {
        return "blue";
      } else if (typeof d == "number") {
        return "green";
      }
    })
    .text(function (d, i) {
      return d;
    });
};
