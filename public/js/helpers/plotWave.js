/**
 * Author: Callum Taylor
 * Filename: plotWave.js
 * License: MIT
 */

/**
 * plotWave
 * Helper function which returns a list of coordinates 
 * corresponding to points to be plotted.
 *
 * @return {*} output
 * @export
 */

export default function plotWave(data, type) {
  // Init output list
  const output = [];
  // Init amount of data points to be plotted
  const numPoints = data.length > 0 ? data.length : 100;

  // Plots a certain kind of graph depending on parameter
  const plot = (type, value) => {
    switch (type) {
      case 1:
        return Math.sin(value);
      case 2:
        return Math.cos(value);
      case 3:
        return Math.tan(value);
    }
  };
  // Add data points to output
  for (let i = 0; i < numPoints; i++) {
    output.push({
      x: i / numPoints,
      y: plot(type, data.length > 0 ? data[i] : (6.2 * i) / 100),
    });
  }
  return output;
}
