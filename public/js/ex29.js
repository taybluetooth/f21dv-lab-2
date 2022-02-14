/**
 * Author: Callum Taylor
 * Filename: ex29.js
 * License: MIT
 */

/**
 * Exercise 29
 * Applys a d3 colour method to the line chart.
 *
 * @export
 */

export default function exercise29() {
  // Set Dimensions
  const xSize = 600;
  const ySize = 600;
  const margin = 40;
  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;

  // Create Random Points
  const numPoints = 100;
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push({ x: i / 100, y: Math.sin((6.2 * i) / 100) });
  }

  // Get the 'limits' of the data - the full extent (mins and max)
  // so the plotted data fits perfectly
  const xExtent = d3.extent(data, (d) => {
    return d.x;
  });
  const yExtent = d3.extent(data, (d) => {
    return d.y;
  });

  var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet3);

  // Append SVG Object to the Page
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", xSize)
    .attr("height", ySize)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

  // X Axis
  const x = d3.scaleLinear().domain([xExtent[0], xExtent[1]]).range([0, xMax]);

  // bottom
  svg
    .append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x))
    .attr("color", color); // make bottom axis green

  // top
  svg.append("g").call(d3.axisTop(x));

  // Y Axis
  const y = d3.scaleLinear().domain([yExtent[0], yExtent[1]]).range([yMax, 0]);

  // left y axis
  svg.append("g").call(d3.axisLeft(y));

  // right y axis
  svg
    .append("g")
    .attr("transform", `translate(${yMax},0)`)
    .call(d3.axisRight(y));

  // Add the line
  svg
    .append("path")
    .datum(data)
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
    
  // Set axes text to be black
  svg.selectAll("svg text").style("fill", "black");
}
