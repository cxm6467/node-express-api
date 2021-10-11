const algorithms = [
  'find_first_repeating_character',
  'without_repeating_character',
  'longest_substring_without_repeating',
  'longest_palindrome'
];
function strings(algo, input) {
  const algoExists = algorithms[algo] === undefined ? false : algorithms[algo];
  const result = {};

  result.input = input;

  if (algoExists) {
    result.result = `[${algo}] is not a valid algorithm...yet.`;
  } else {
    switch (algo) {
      case 'find_first_repeating_character':
        result.algorithm = algo;
        // eslint-disable-next-line no-case-declarations
        const firstRepeatingChar = function (str) {
          const visited = {};
          // eslint-disable-next-line no-restricted-syntax
          for (const x of str) {
            if (visited[x]) {
              return x;
            }
            visited[x] = true;
          }
          return '\0';
        };
        result.result = firstRepeatingChar(input);
        break;
      default:
        result.result = '[Default Case]';
    }
  }
  return result;
}
module.exports = strings;
