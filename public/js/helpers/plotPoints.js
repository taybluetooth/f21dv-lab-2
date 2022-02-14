/**
 * Author: Callum Taylor
 * Filename: plotPoints.js
 * License: MIT
 */

/**
 * plotPoints
 * Plots points onto a graph given a data set, list of positions
 * and an svg object
 * 
 * @export
 * @param {*} arr
 * @param {*} pos
 * @param {*} svg
 * @param {*} xMax
 * @param {*} yMax
 * @param {string} [type="circle"]
 * @param {string} [color="red"]
 */

export default function plotPoints(
  arr,
  pos,
  svg,
  xMax,
  yMax,
  type = "circle",
  color = "red"
) {
  // Init d3 symbol object for shapes
  var symbol = d3.symbol();

  // Get limits of axes
  const xExtent = d3.extent(pos, (d) => {
    return d.x;
  });
  const yExtent = d3.extent(pos, (d) => {
    return d.y;
  });

  // X Axis
  const x = d3.scaleLinear().domain([xExtent[0], xExtent[1]]).range([0, xMax]);

  // Y Axis
  const y = d3.scaleLinear().domain([yExtent[0], yExtent[1]]).range([yMax, 0]);

  // Add points
  svg
    .selectAll("dot")
    .data(pos)
    .enter()
    .append("path")
    .attr(
      "d",
      symbol.type(function (d) {
        if (type == "triangle") {
          return d3.symbolTriangle;
        } else {
          return d3.symbolCircle;
        }
      })
    )
    .attr("transform", function (d) {
      return "translate(" + x(d.x) + "," + y(d.y) + ")";
    })
    .style("fill", color);

  // Add labels
  svg
    .selectAll("dot")
    .data(pos)
    .enter()
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + (x(d.x) - 2) + "," + (y(d.y) - 5) + ")";
    })
    .text(function (d, i) {
      return arr[i];
    })
    .attr("text-anchor", "middle")
    .style("fill", "black")
    .style("font-size", "10px")
    .style("font-family", "sans-serif");
}
