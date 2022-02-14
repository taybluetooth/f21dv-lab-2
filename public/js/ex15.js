/**
 * Author: Callum Taylor
 * Filename: ex15.js
 * License: MIT
 */

// Import helper function
import getHFAgeCount from "./helpers/getHFAgeCount.js";

/**
 * Exercise 15
 * Extends the bar chart to use more colour.
 *
 * @export
 */

export default async function exercise15() {
  // Init list with age counts
  var arr = await getHFAgeCount();

  // Init data list
  var data = [];

  // Push entries to data list
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
    .data(arr)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    })
    .style("fill", function (d, i) {
      if (d.label == "1-30") {
        return "black";
      }
      if (d.label == "31-40") {
        return "red";
      }
      if (d.label == "41-60") {
        return "darkorange";
      }
      if (d.label == "61-100") {
        return "blue";
      }
    });

  // Create bars shapes
  bar
    .append("rect")
    .attr("width", function (d) {
      return d.count * scaleFactor;
    })
    .attr("height", barHeight - 1);

  // Create labels
  bar
    .append("text")
    .attr("x", function (d) {
      return d.count * scaleFactor;
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) {
      return d.count;
    });
}
