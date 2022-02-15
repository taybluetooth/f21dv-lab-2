/**
 * Author: Callum Taylor
 * Filename: ex15.js
 * License: MIT
 */

/**
 * Exercise 15
 * Adds mouse events to graph example.
 *
 * @export
 */

export default async function exercise15() {
  var svg = d3.select("svg");
  var margin = 200;
  var width = svg.attr("width") - margin;
  var height = svg.attr("height") - margin;
  var path =
    "https://github.com/taybluetooth/f21dv-lab-2/blob/master/public/csv/ex15.csv";

  svg
    .append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", 50)
    .attr("y", 50)
    .attr("font-size", "24px")
    .text("Stock Price");

  var x = d3.scaleBand().range([0, width]).padding(0.4);
  var y = d3.scaleLinear().range([height, 0]);

  var g = svg
    .append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

  d3.csv(path).then(function (data) {
    x.domain(
      data.map(function (d) {
        return d.year;
      })
    );

    y.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .append("text")
      .attr("y", height - 250)
      .attr("x", width - 100)
      .attr("text-anchor", "end")
      .attr("stroke", "black")
      .text("Year");

    g.append("g")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(function (d) {
            return "$" + d;
          })
          .ticks(10)
      )
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "-5.1em")
      .attr("text-anchor", "end")
      .attr("stroke", "black")
      .text("Stock Price");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      //    .on(..... ) – call mouse events here...
      .attr("x", function (d) {
        return x(d.year);
      })
      .attr("y", function (d) {
        return y(d.value);
      })
      .attr("width", x.bandwidth())
      .transition()
      .ease(d3.easeLinear)
      .duration(400)
      .delay(function (d, i) {
        return i * 50;
      })
      .attr("height", function (d) {
        return height - y(d.value);
      });
  });
}
