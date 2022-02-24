/**
 * Author: Callum Taylor
 * Filename: ex23.js
 * License: MIT
 */

/**
 * Exercise 23
 * Updates bar chart example to use a line chart instead.
 *
 * @export
 */

export default function exercise23() {
  // create 2 data_set
  const data1 = [
    { group: "A", value: 5 },
    { group: "B", value: 20 },
    { group: "C", value: 9 },
  ];

  const data2 = [
    { group: "A", value: 10 },
    { group: "B", value: 2 },
    { group: "C", value: 22 },
    { group: "D", value: 14 },
  ];

  const data3 = [
    { group: "A", value: 15 },
    { group: "B", value: 7 },
    { group: "C", value: 2 },
    { group: "D", value: 5 },
    { group: "E", value: 9 },
  ];

  d3.select("body")
    .append("button")
    .on("click", () => update(data1))
    .text("Graph 1");

  d3.select("body")
    .append("button")
    .on("click", () => update(data2))
    .text("Graph 2");

  d3.select("body")
    .append("button")
    .on("click", () => update(data3))
    .text("Graph 3");

  // set the dimensions and margins of the graph
  const margin = { top: 100, right: 30, bottom: 70, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select("body")
    .append("div")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X axis
  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      data1.map(function (d) {
        return d.group;
      })
    )
    .padding(0.2);

  var xAxis = svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear().domain([0, 20]).range([height, 0]);
  var yAxis = svg.append("g").attr("class", "myYaxis").call(d3.axisLeft(y));

  // A function that create / update the plot for a given Graph:
  function update(data) {
    // Remove any existing lines
    svg.selectAll(".line").remove();

    // Add the line
    svg
      .append("path")
      .attr("class", "line")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.group);
          })
          .y(function (d) {
            return y(d.value);
          })
      )
      .attr("stroke-dasharray", "385 385")
      .attr("stroke-dashoffset", 385)
      .transition()
      .duration(2000)
      .attr("stroke-dashoffset", 0);
  }

  // Initialize the plot with the first dataset
  update(data1);
}
