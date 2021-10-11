const lists = require('../../data/lists')();
const arrayAlgorithms = require('./arrayAlgorithms');

const algorithms = lists.algorithms.arrays;

function arrays(algo, input) {
  const result = {};
  result.input = input;
  result.algorithm = algo;

  switch (algo) {
    case 'find_pair':
      try {
        JSON.parse(input);
      } catch (e) {
        result.result = `Error with input: ${input}`;
        return result;
      }
      result.input = JSON.parse(input);
      const { arr, target } = JSON.parse(input);

      if (arr.length <= 0 && !Number.isNaN(target)) {
        result.result = `Error with input ${input}, please inspect and try again.`;
        return result;
      }

      if (arr.length <= 0) {
        result.result = `Error with array input: ${arr} is an empty array.`;
        return result;
      }

      if (!Number.isNaN(target)) {
        result.result = `Error with target input: ${target} is not a number.`;
        return result;
      }
      result.result = arrayAlgorithms.findPair(arr, target);
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
