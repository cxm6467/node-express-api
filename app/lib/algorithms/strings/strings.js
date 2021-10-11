const algorithms = [
  'first_repeating_character',
  'without_repeating_character',
  'longest_substring_without_repeating',
  'longest_palindrome',
];
function strings(algo, input) {
  const algoExists = algorithms[algo] === undefined ? false : algorithms[algo];
  const result = {};

  result.input = input;

  if (!algoExists) {
    result.result = `[${algo}] is not a valid algorithm...yet.`;
  } else {
    result.result = input;
  }
  return result;
}
module.exports = strings;
