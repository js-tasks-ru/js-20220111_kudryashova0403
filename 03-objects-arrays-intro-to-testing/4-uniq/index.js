/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let uniqArr = new Set();
  if (!arr) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    uniqArr.add(arr[i]);
  }
  return [...uniqArr];
}
