/**
 * Re-scale an Array to fit between two values
 *
 * @export
 * @param {Array<Number|Object>} arr
 * @param {any} scaledMin new minimum value of the mappedArray
 * @param {any} scaledMax new maximum value of the mappedArray
 * @param {String} key key of object to scale if arr is an Array of Objects
 * @returns {Array<Number|Object>} re-scaled mappedArray that keeps the relative distribution
 * of the numbers in the original mappedArray, but spaces them between the new max and min
 */
export function scaleBetween(arr, scaledMin, scaledMax, key = null) {
  let mappedArr = [...arr];
  if (key !== null) {
    mappedArr = mappedArr.map((el) => el[key]);
  }
  console.log("MAPPED", mappedArr);
  const min = Math.min(...mappedArr);
  const max = Math.max(...mappedArr);
  if (max === min) {
    mappedArr = mappedArr.map((el) => (min + max) / 2);
  } else {
    mappedArr = mappedArr.map(
      (num) => ((scaledMax - scaledMin) * (num - min)) / (max - min) + scaledMin
    );
  }
  if (key !== null) {
    return arr.map((el, i) => {
      el[key] = mappedArr[i];
      return el;
    });
  }
  return mappedArr;
}

/**
 * Generate a random float between two values
 *
 * @export
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @returns {Number} in range [min, max)
 */
export function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
