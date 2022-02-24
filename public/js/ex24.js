/**
 * Author: Callum Taylor
 * Filename: ex24.js
 * License: MIT
 */

/**
 * Exercise 24
 * Pie chart example
 *
 * @export
 */

export default async function exercise24() {
  let intr = d3.interpolate([20, 40, 4], [1, 12, 10]);

  console.log("Type of returned function is: ", typeof intr);

  console.log(intr(0.2));

  d3.select("body")
    .append("text")
    .attr("width", 100)
    .style("display", "block")
    .style("margin-bottom", "16px")
    .text(
      "A function is returned as the type in the first statement as only the function's type is being printed and not its return type. "
    )
    .style("font-family", "sans-serif");

  d3.select("body")
    .append("text")
    .attr("width", 100)
    .style("display", "block")
    .text(
      "In the second statement an array is returned containing the returning value of the called function, which interpolates two seperate arrays into one to a certain point as specified by the 0.2 or 20% of the way. "
    )
    .style("font-family", "sans-serif");
}
