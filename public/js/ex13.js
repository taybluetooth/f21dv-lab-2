/**
 * Author: Callum Taylor
 * Filename: ex13.js
 * License: MIT
 */

/**
 * Exercise 13
 * Extends the example to include the ‘enter’ and ‘exit’ concepts.
 *
 * @export
 */

export default async function exercise13() {
  // Init csv path
  let svgcsv =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex12.csv";

  // Init lists which holds objects from file
  let circles = [];
  let lines = [];
  let rects = [];

  // Fetch data from csv asynchronously
  const csv = await d3.csv(svgcsv);

  // Assign objects to array
  csv.forEach((data) => {
    if (data.shape == "circle") {
      circles.push({
        dim: data.dim,
        position: data.position,
        color: data.color,
      });
    } else if (data.shape == "line") {
      lines.push({
        dim: data.dim,
        position: data.position,
        color: data.color,
      });
    } else if (data.shape == "rect") {
      rects.push({
        dim: data.dim,
        position: data.position,
        color: data.color,
      });
    }
  });

  // Append svg element
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", "1px solid green");

  // Dynamically add circle
  svg
    .selectAll("circle")
    .data(circles)
    .enter()
    .append("circle")
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("fill", function (d) {
      return d.color;
    })
    .attr("cx", function (d) {
      return d.dim.split(",")[0];
    })
    .attr("cy", function (d) {
      return d.dim.split(",")[1];
    })
    .attr("r", function (d) {
      return d.position;
    });

  // Dynamically add line
  svg
    .selectAll("line")
    .data(lines)
    .enter()
    .append("line")
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("x1", function (d) {
      return d.dim.split(",")[0];
    })
    .attr("y1", function (d) {
      return d.dim.split(",")[1];
    })
    .attr("x2", function (d) {
      return d.dim.split(",")[2];
    })
    .attr("y2", function (d) {
      return d.dim.split(",")[3];
    });

  // Dynamically add rect
  svg
    .selectAll("rect")
    .data(rects)
    .enter()
    .append("rect")
    .attr("stroke", function (d) {
      return d.color;
    })
    .attr("fill", function (d) {
      return d.color;
    })
    .attr("x", function (d) {
      return d.position.split(",")[0];
    })
    .attr("y", function (d) {
      return d.position.split(",")[1];
    })
    .attr("width", function (d) {
      return d.dim.split(",")[0];
    })
    .attr("height", function (d) {
      return d.dim.split(",")[1];
    });

  // Demonstrate exit concept
  svg.selectAll("line").remove().exit();
}
