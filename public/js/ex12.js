/**
 * Author: Callum Taylor
 * Filename: ex12.js
 * License: MIT
 */

/**
 * Exercise 12
 * Builds an svg from an external file.
 * 
 * @export
 */

export default async function exercise12() {
  // Init csv path
  let svgcsv =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex12.csv";
  
  // Init list which holds objects from file
  let arr = [];

  // Fetch data from csv asynchronously
  const csv = await d3.csv(svgcsv);

  // Assign objects to array
  csv.forEach((data) => {
    arr.push({
      shape: data.shape,
      dim: data.dim,
      position: data.position,
      color: data.color,
    });
  });

  // Print array
  console.log(arr);

  // Append svg element
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", "1px solid green");

  // Declare lists for dimensions and positions
  let dim = [];
  let pos = [];

  // For each element in array parse object
  // Each shape has different attrs so a switch case is used
  arr.forEach((entry) => {
    switch (entry.shape.toLowerCase()) {
      case "circle":
        dim = entry.dim.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("fill", entry.color)
          .attr("cx", dim[0])
          .attr("cy", dim[1])
          .attr("r", entry.position);
        break;
      case "ellipse":
        dim = entry.dim.split(",");
        pos = entry.position.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("fill", entry.color)
          .attr("cx", dim[0])
          .attr("cy", dim[1])
          .attr("rx", pos[0])
          .attr("ry", pos[1]);
        break;
      case "line":
        dim = entry.dim.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("x1", dim[0])
          .attr("y1", dim[1])
          .attr("x2", dim[2])
          .attr("y2", dim[3]);
        break;
      case "rect":
        dim = entry.dim.split(",");
        pos = entry.position.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("fill", entry.color)
          .attr("x", pos[0])
          .attr("y", pos[1])
          .attr("width", dim[1])
          .attr("height", dim[0]);
        break;
    }
  });
};
