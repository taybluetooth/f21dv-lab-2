/**
 * Author: Callum Taylor
 * Filename: ex19.js
 * License: MIT
 */

/**
 * getEx19
 * Function to be called by main exercise as per instructions.
 * Takes path of csv file as parameter.
 *
 * @param {*} path
 */

async function getEx19(path) {
  const csv = await d3.csv(path);

  const width = 500;
  const barHeight = 20;
  const margin = 1;

  const data = [];
  csv.forEach((entry) => {
    data.push(parseInt(entry.value));
  });

  var scale = d3
    .scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([50, 500]);

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

  var g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    });

  g.append("rect")
    .attr("width", function (d) {
      return scale(d);
    })
    .attr("fill", "blue")
    .attr("height", barHeight - margin);

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

/**
 * Exercise 19
 * Main execution function
 * @export
 */
export default function exercise19() {
  getEx19(
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex18.csv"
  );
  getEx19(
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/public/csv/ex19.csv"
  );
}
