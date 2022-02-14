/**
 * Author: Callum Taylor
 * Filename: drawAxis.js
 * License: MIT
 */

/**
 * drawAxis
 * Helper function which draws all 4 axes on an svg object
 *
 * @export
 * @param {*} svg
 * @param {*} x
 * @param {*} y
 * @param {*} yMax
 */

export default function drawAxis(svg, x, y, yMax) {
  // bottom
  svg
    .append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x))

  // top
  svg.append("g").call(d3.axisTop(x).tickFormat(""));

  // left y axis
  svg.append("g").call(d3.axisLeft(y));

  // right y axis
  svg
    .append("g")
    .attr("transform", `translate(${yMax},0)`)
    .call(d3.axisRight(y).tickFormat(""));
}
