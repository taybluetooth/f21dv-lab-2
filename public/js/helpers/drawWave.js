/**
 * Author: Callum Taylor
 * Filename: drawWave.js
 * License: MIT
 */

import drawAxis from "./drawAxis.js";

/**
 * drawWave
 * Draws a wave onto an svg object given a list of data
 *
 * @export
 * @param {*} arr
 * @param {*} svg
 * @param {*} xMax
 * @param {*} yMax
 * @param {string} [color="steelblue"]
 */

export default function drawWave(arr, svg, xMax, yMax, color = "steelblue") {
  // Get limits of x and y axes.
  const xExtent = d3.extent(arr, (d) => {
    return d.x;
  });
  const yExtent = d3.extent(arr, (d) => {
    return d.y;
  });

  // X Axis
  const x = d3.scaleLinear().domain([xExtent[0], xExtent[1]]).range([0, xMax]);

  // Y Axis
  const y = d3.scaleLinear().domain([yExtent[0], yExtent[1]]).range([yMax, 0]);

  drawAxis(svg, x, y, yMax);

  // Add the line
  svg
    .append("path")
    .datum(arr)
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.x);
        })
        .y(function (d) {
          return y(d.y);
        })
    );
}
