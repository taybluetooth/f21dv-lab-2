/**
 * Author: Callum Taylor
 * Filename: ex32.js
 * License: MIT
 */

/**
 * Exercise 32
 * Adds image to background of bars.
 *
 * @export
 */

export default function exercise32() {
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
    .force("radial", d3.forceRadial(20, width / 2, height / 2))
  .force("collide", d3.forceCollide().radius(50)
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
      })
      .on("mouseover", function (d) {
        simulation.force("collide", d3.forceCollide().radius(100))
      })
      .on("mouseout", function (d) {
        simulation.force("collide", d3.forceCollide().radius(50))
      })
  }
  console.log("ready..");
}
