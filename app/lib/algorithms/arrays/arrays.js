const lists = require('../../data/lists')();
const arrayAlgorithms = require('./arrayAlgorithms');

const algorithms = lists.algorithms.arrays;

function arrays(algo, input) {
  const result = {};
  result.input = input;
  result.algorithm = algo;

  switch (algo) {
    case 'find_pair':
      const [arr, target] = input;
      if (arr.length <= 0 || Number.isNaN(input)) {
        result.result = `Error with input: ${input}`;
      } else {
        result.result = arrayAlgorithms.findPair(arr, target);
      }
      break;
    case 'remove_duplicates':
      result.result = arrayAlgorithms.removeDuplicates(input);
      break;
    case 'find_duplicates':
      result.result = arrayAlgorithms.findDuplicate(input);
      break;
    case 'maximum_subarray':
      result.result = arrayAlgorithms.maximumSubarray(input);
      break;
    case 'find_peak':
      result.result = arrayAlgorithms.findPeak(input);
      break;
    case 'product_except_self':
      result.result = arrayAlgorithms.productExceptSelf(input);
      break;
    default:
      result.result = `[${algo}] is not a valid algorithm, please try one of these: ${algorithms.join(', ')}.`;
  }
  return result;
}
module.exports = arrays;
