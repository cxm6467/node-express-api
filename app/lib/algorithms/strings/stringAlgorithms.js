/**
 * Find length of longest palindrome
 *
 * @param {string} - string to check
 * @returns {int} - length of longest palindrome
 *
 */
function longestPalindrome(str) {
  const occurrences = [...Array(128)].map((x) => 0);
  for (const char of str.split('')) {
    occurrences[str.charCodeAt(char)]++;
  }
  let length = 0;
  for (const occurrence of occurrences) {
    if (occurrence % 2 === 0) {
      length += occurrence;
    } else {
      length += occurrence - 1;
    }
  }
  if (length.length < str.length) {
    length++;
  }
  return length;
}

/**
 *  Find first repeating char in a string
 *
 *  @param {string} - String to check
 *  @returns {char} - First repeating char
 *
 */
function firstRepeatingChar(str) {
  const visited = {};
  for (const x of str) {
    if (visited[x]) return x;
    visited[x] = true;
  }
  return 'No repeating Chars';
}

/**
 * Find longest substr without repeating chars
 *
 * @param {string} - String to check for the longest substr
 * @return {boolean} - check if str has repeating chars
 */
function withoutRepeating(str) {
  const visited = [...Array(128)].map((x) => false);
  for (let i = 0; i < str.length; i++) {
    if (visited[str.charCodeAt(i)]) return false;
    visited[str.charCodeAt(i)] = true;
  }
  return true;
}

/**
 * Find longest substr without repeating chars
 *
 * @param {string} - String to check for the longest substr
 * @return {number} - length of longest substr
 */

function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const substr = str.substring(i, j + 1);
      if (withoutRepeating(substr) && substr.length > maxLength) { maxLength = substr.length; }
    }
  }
  return maxLength;
}

module.exports = {
  firstRepeatingChar,
  withoutRepeating,
  longestSubstringWithoutRepeating,
  longestPalindrome
};