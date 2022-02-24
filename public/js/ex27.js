/**
 * Author: Callum Taylor
 * Filename: ex27.js
 * License: MIT
 */

/**
 * Exercise 27
 * Modifies the pie chart example.
 * @export
 */

export default function exercise27() {
  var dataset = {
    apples: [5345, 2879, 1997, 2437, 4045],
  };

  var dataset2 = {
    apples: [2300, 1279, 1485, 2695, 2352],
  };

  d3.select("body")
    .append("button")
    .on("click", () => update(dataset))
    .text("Graph 1");

  d3.select("body")
    .append("button")
    .on("click", () => update(dataset2))
    .text("Graph 2");

  var width = 460,
    height = 300,
    radius = Math.min(width, height) / 2;

  var color = d3.scaleOrdinal().range(d3.schemeSet3);

  var pie = d3.pie().sort(null);

  var arc = d3
    .arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 50);

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)

    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  function update(dataset) {
    d3.selectAll("path").transition().duration(1000).remove();

    var updatePie = svg.selectAll("path").data(pie(dataset.apples));

    var createPie = updatePie
      .enter()
      .append("path")
      .attr("fill", function (d, i) {
        return color(i);
      })
      .attr("d", arc)
      .transition()
      .duration(1000)
      .attrTween("d", function (d) {
        var i = d3.interpolate(d.endAngle, d.startAngle);
        return function (t) {
          d.startAngle = i(t);
          return arc(d);
        };
      });

    updatePie.transition().duration(1000).attr("d", arc);
  }

  update(dataset);
}
