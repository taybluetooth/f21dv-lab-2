/**
 * Author: Callum Taylor
 * Filename: ex21.js
 * License: MIT
 */

/**
 * Exercise 21
 * Add an ‘axis’ to the bar chart example.
 *
 * @export
 */

export default function exercise21() {
  // Init data list
  var data = [5, 10, 12, 6];

  // Init graph dimensions
  const margin = 60;
  const width = 700 - 2 * margin;
  const height = 900 - 2 * margin;

  // Create svg
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create graph
  const graph = svg
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  // Create y axis scaling function
  const yScale = d3
    .scaleLinear()
    .range([600, 0])
    .domain([0, Math.max(...data)]);

  // Add y axis
  graph.append("g").call(d3.axisLeft(yScale));

  // Create x axis scaling function
  const xScale = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map((s, i) => i + 1))
    .padding(0.1);

  // Add color scheme
  var colors = d3.scaleOrdinal().domain(data).range(d3.schemeSet3);

  // Add x axis
  graph
    .append("g")
    .attr("transform", `translate(0, ${600})`)
    .call(d3.axisBottom(xScale));

  // Create bars
  graph
    .selectAll()
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (s, i) => xScale(i + 1))
    .attr("y", (s) => yScale(s))
    .attr("height", (s) => 600 - yScale(s))
    .attr("width", 80)
    .style("fill", colors);

  // Set axis text to be black
  svg.selectAll("svg text").style("fill", "black");
}
