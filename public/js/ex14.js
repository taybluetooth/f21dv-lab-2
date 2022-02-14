/**
 * Author: Callum Taylor
 * Filename: ex14.js
 * License: MIT
 */

// Import helper function
import getHFAgeCount from "./helpers/getHFAgeCount.js";

/**
 * Exercise 14
 * Extends the example to include the ‘enter’ and ‘exit’ concepts.
 *
 * @export
 */

export default async function exercise14() {
  // Init list with age count
  var arr = await getHFAgeCount();

  // Init data list
  var data = [];

  // Push all entries into data list
  arr.forEach((entry) => {
    data.push(entry.count);
  });

  // Set graph attrs
  var width = 1000;
  var scaleFactor = 5;
  var barHeight = 20;

  // Create graph
  var graph = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

  // Create bars
  var bar = graph
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    })
    .style("fill", "blue");
  
  // Create bars shape
  bar
    .append("rect")
    .attr("width", function (d) {
      return d * scaleFactor;
    })
    .attr("height", barHeight - 1);
  
  // Create labels
  bar
    .append("text")
    .attr("x", function (d) {
      return d * scaleFactor;
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) {
      return d;
    });
}
