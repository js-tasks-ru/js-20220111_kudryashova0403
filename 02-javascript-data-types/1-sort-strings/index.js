/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'desc') {
    return arr.sort((a, b) =>
      b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper' })
    );
  } else {
    return arr.sort((a, b) =>
      a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'})
    );
  }
}
console.log(sortStrings(['bc', 'Nya', 'aa', 'Кя', 'br', 'Tu', 'аст'], 'desc'));
console.log(sortStrings(['ac', 'Nya', 'aa', 'Кя', 'br', 'Tu', 'август']));
