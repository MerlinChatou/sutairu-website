/**
 * Checks whether a given string contains all the specified substrings.
 *
 * Iterates through each substring in the provided array and verifies
 * that each one exists within the main string using `String.prototype.includes`.
 *
 * @param {string} mainString - The string to search within.
 * @param {string[]} substrings - An array of substrings to check for.
 * @returns {boolean} Returns `true` if all substrings are found in the main string, otherwise `false`.
 */
export const containsAllSubstrings = (mainString, substrings) => {
  return substrings.every(sub => mainString.includes(sub));
};