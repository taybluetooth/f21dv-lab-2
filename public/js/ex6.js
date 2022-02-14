/**
 * Author: Callum Taylor
 * Filename: ex6.js
 * License: MIT
 */

/**
 * Exercise 6
 * Additional to the example, adds an attribute called 'color' which is printed.
 * 
 * @export
 */

export default function exercise6 () {
  // Create HTML elements programatically
  for (var i = 0; i < 3; i++) {
    d3.select("body").append("div");
  }

  // Define initial data
  let otherdata = [
    { name: "test", val: 1, color: "blue" },
    { name: "other", val: 2, color: "red" },
    { name: "b", val: 3, color: "green" },
  ];

  // Print out data
  let paragraph = d3
    .select("body")
    .selectAll("div")
    .data(otherdata)
    .text(function (d, i) {
      console.log("d.name: " + d.name);
      console.log("d.val:  " + d.val);
      console.log("d.color " + d.color);
      console.log("i: " + i);
      console.log("this: " + this);

      return "cont:" + d.name;
    });
};
