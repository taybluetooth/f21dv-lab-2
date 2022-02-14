/**
 * Author: Callum Taylor
 * Filename: ex12.js
 * License: MIT
 */

/**
 * Exercise 12
 * Draws bars and applies seperate transitions.
 *
 * @export
 */

export default function exercise12() {
  // Add svg
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", 300)
    .attr("height", 300);

  // Add bars
  var bar1 = svg
    .append("rect")
    .attr("fill", "blue")
    .attr("x", 100)
    .attr("y", 20)
    .attr("height", 30)
    .attr("width", 20);

  var bar2 = svg
    .append("rect")
    .attr("fill", "green")
    .attr("x", 130)
    .attr("y", 20)
    .attr("height", 30)
    .attr("width", 20);

  var bar3 = svg
    .append("rect")
    .attr("fill", "red")
    .attr("x", 160)
    .attr("y", 20)
    .attr("height", 30)
    .attr("width", 20);

  update();

  // Update method to apply transitions
  function update() {
    bar1
      .transition()
      .ease(d3.easeLinear)

      .duration(2000)
      .attr("height", 100);

    bar2
      .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .delay(2000)
      .attr("height", 125);

    bar3
      .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .delay(4000)
      .attr("height", 150);
  }

  // Reanimate helper function
  function animate() {
    d3.selectAll("rect").attr("height", 30);
    update();
  }

  // Add button to repeat animation
  d3.select("body")
    .append("button")
    .style("padding", "16px")
    .style("margin-top", "10px")
    .style("background-color", "white")
    .style("color", "black")
    .style("border", "1px solid black")
    .style("border-radius", "8px")
    .style("display", "block")
    .on("click", () => animate())
    .text("Repeat");
}
