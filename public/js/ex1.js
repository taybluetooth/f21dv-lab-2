/**
 * Author: Callum Taylor
 * Filename: ex1.js
 * License: MIT
 */

/**
 * Exercise 1
 * Prints out D3 version data.
 *
 * @export
 */

export default function exercise1() {
  // Version 7.3.0 shows
  d3.select("body").append("p").text("d3.version:" + d3.version)
  console.log("d3.version:", d3.version);
}
