/**
 * Author: Callum Taylor
 * Filename: ex5.js
 * License: MIT
 */

/**
 * Exercise 5
 * Appends a div to the DOM and sets its contents to be 'Hello World' and green.
 *
 * @export
 */

export default function exercise5() {
  d3.select("body").append("div").text("Hello World!").style("color", "green");
}
