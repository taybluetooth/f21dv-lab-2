/**
 * Author: Callum Taylor
 * Filename: ex29.js
 * License: MIT
 */

/**
 * Exercise 29
 * Generates visualisation using inline array.
 *
 * @export
 */

export default function exercise29() {
  var width = 400,
    height = 400;

  // setup svg
  d3.select("body").append("svg").attr("width", width).attr("height", height);

  // generate some random data
  var nodes = [
    { radius: 4 },
    { radius: 11 },
    { radius: 21 },
    { radius: 24 },
    { radius: 28 },
    { radius: 29 },
    { radius: 34 },
    { radius: 39 },
    { radius: 47 },
    { radius: 52 },
    { radius: 56 },
  ];

  var simulation = d3
    .forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(5))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collision",
      d3.forceCollide().radius(function (d) {
        return d.radius;
      })
    )
    .on("tick", ticked);

  var colorScale = d3.scaleOrdinal().domain(nodes).range(d3.schemeSet3);

  function ticked() {
    var u = d3
      .select("svg")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", colorScale)
      .attr("r", function (d) {
        return d.radius;
      })
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });
  }
  console.log("ready..");
}
