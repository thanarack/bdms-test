/**
 * It returns the last id in the array, or 1 if the array is empty
 * @param d - the data array
 * @returns The last id in the array of objects.
 */
const getLastId = (d) => {
  return d[d.length - 1] ? d[d.length - 1].id + 1 : 1;
};

/* Exporting the function getLastId so that it can be used in other files. */
module.exports = getLastId;
