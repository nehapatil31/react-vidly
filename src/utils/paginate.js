import _ from "lodash";

/**
 *
 * @param {Array} items - Array of items (whole)
 * @param {Number} pageNumber - Current page number
 * @param {Number} pageSize - Items on each page
 * @returns {Array} - items on current page
 */
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items) //convert array into lodash object
    .slice(startIndex) // slice from startIndex
    .take(pageSize) //take pageSize items
    .value(); //convert back into array
}
