/**
 * Author: Callum Taylor
 * Filename: ex26.js
 * License: MIT
 */

/**
 * Exercise 26
 * Interpolate two dates.
 * @export
 */

export default function exercise26() {
  let date = d3.interpolateDate(new Date("2021-12-02"), new Date("2022-02-17"))
  console.log(date(0.5));

  d3.select("body")
  .append("text")
  .style("width", "700px")
  .style("display", "block")
  .style("margin-bottom", "16px")
  .text(
    `A new date can be acquired using the interpolateDate function d3 provides. This is used like so:   let date = d3.interpolateDate(new Date("2021-12-02"), new Date("2022-02-17")). Giving us the output of January 9th 2022.
    `
  )
  .style("font-family", "sans-serif")
}
