/**
 * Author: Callum Taylor
 * Filename: ex17.js
 * License: MIT
 */

/**
 * Exercise 17
 * Modifies the example so the bars are green if below 100 and red if above 500.
 *
 * @export
 */

export default function exercise17() {
  // Init data list
  const data = [50, 400, 300, 900, 250, 1000];

  // Init graph attrs
  const width = 500;
  const barHeight = 20;
  const margin = 1;

  // Init scaling for graph
  var scale = d3
    .scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([50, 500]);

  // Create svg
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

  // Create grouping
  var g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    });

  // Create bars shape
  g.append("rect")
    .attr("width", function (d) {
      return scale(d);
    })
    .attr("fill", function (d, i) {
      if (d < 100) {
        return "green";
      } else if (d > 500) {
        return "red";
      } else {
        return "blue";
      }
    })
    .attr("height", barHeight - margin);

  // Create label
  g.append("text")
    .attr("x", function (d) {
      return scale(d);
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function (d) {
      return d;
    });
}
