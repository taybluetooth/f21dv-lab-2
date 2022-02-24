/**
 * Author: Callum Taylor
 * Filename: ex25.js
 * License: MIT
 */

/**
 * Exercise 25
 * Interpolate 2 colours.
 *
 * @export
 */

export default function exercise25() {
  let cc = d3.interpolate("red", "green");
  console.log(cc(0.5));

  d3.select("body")
  .append("text")
  .attr("width", 100)
  .style("display", "block")
  .style("margin-bottom", "16px")
  .text(
    "A new colour in an rgb format is returned rgb(128, 64, 0) which because of the 0.5 input parameter, is the definitive midpoint between red and green."
  )
  .style("font-family", "sans-serif")
}
