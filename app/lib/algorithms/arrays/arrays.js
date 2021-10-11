const algorithms = [
  'find_pair',
  'remove_duplicates',
  'find_duplicates',
  'maximum_subarray',
  'find_peak',
  'product_except_self'
];

function arrays(algo, input) {
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
module.exports = arrays;
