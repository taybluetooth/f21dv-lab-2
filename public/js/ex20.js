/**
 * Author: Callum Taylor
 * Filename: ex20.js
 * License: MIT
 */

/**
 * Exercise 20
 * Update the example so an axis is drawn on all sides.
 *
 * @export
 */

export default function exercise20() {
  // Init margins and dimensions
  var margin = {
      top: 20,
      right: 20,
      bottom: 50,
      left: 50,
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // Init data list
  var data = [10, 15, 20, 25, 30];

  // Create svg
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create x axis scaling
  var xscale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width - 100]);

  // Create y axis scaling
  var yscale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([height / 2, 0]);

  // Create axes
  var x_axis_bottom = d3.axisBottom().scale(xscale);
  var x_axis_top = d3.axisTop().scale(xscale);
  var y_axis_left = d3.axisLeft().scale(yscale);
  var y_axis_right = d3.axisRight().scale(yscale);

  // Create grouping and add left axis
  svg.append("g").attr("transform", "translate(50, 30)").call(y_axis_left);

  // Add right axis
  svg
    .append("g")
    .attr("transform", "translate(" + (width - 50) + ", 30)")
    .call(y_axis_right)
    .style("color", "blue")
    .style("stroke", "blue");

  // Init x axis translation var
  var xAxisTranslate = height / 2 + 30;

  // Add bottom axis
  svg
    .append("g")
    .attr("transform", "translate(50, " + xAxisTranslate + ")")
    .call(x_axis_bottom);

  // Add top axis
  svg
    .append("g")
    .attr("transform", "translate(50, 30)")
    .call(x_axis_top)
    .attr("color", "blue")
    .style("stroke", "blue");
}
