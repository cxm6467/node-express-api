const lists = require('../../data/lists')();
const stringAlgorithms = require('./stringAlgorithms');

const algorithms = lists.algorithms.strings;

function strings(algo, input) {
  const result = {};
  result.input = input;
  result.algorithm = algo;

  switch (algo) {
    case 'find_first_repeating_character':
      result.result = stringAlgorithms.firstRepeatingChar(input);
      break;
    case 'string_without_repeating_character':
      result.result = stringAlgorithms.withoutRepeating(input);
      break;
    case 'longest_substring_without_repeating':
      result.result = stringAlgorithms.longestSubstringWithoutRepeating(input);
      break;
    case 'longest_palindrome':
      result.result = stringAlgorithms.longestPalindrome(input);
      break;
    default:
      result.result = `[${algo}] is not a valid algorithm, please try one of these: ${algorithms.join(', ')}.`;
  }
  return result;
}
module.exports = strings;
