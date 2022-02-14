/**
 * Author: Callum Taylor
 * Filename: ex18.js
 * License: MIT
 */

/**
 * Exercise 18
 * Extends the example, so the ‘bar chart’ data is displayed from an external file.
 * @export
 */

export default async function exercise18() {
  // Init csv path
  const path =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex18.csv";

  // Fetch csv data asynchronously
  const csv = await d3.csv(path);

  // Create graph attrs
  const width = 500;
  const barHeight = 20;
  const margin = 1;

  // Init data list
  const data = [];

  // Add entries to data list
  csv.forEach((entry) => {
    data.push(parseInt(entry.value));
  });

  // Init graph scale
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

  // Add bars
  g.append("rect")
    .attr("width", function (d) {
      return scale(d);
    })
    .attr("fill", "blue")
    .attr("height", barHeight - margin);

  // Add labels
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
