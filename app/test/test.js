const assert = require('assert');
const strings = require('../lib/algorithms/strings/stringAlgorithms');
const arrays = require('../lib/algorithms/arrays/arrayAlgorithms');


describe('Arrays', () => {
  describe('#findPair(arr,target)', () => {
    it('Should return true if there is a pair of integers in the array that add to the target.', () => {
      assert.equal(arrays.findPair([1, 2, 3, 4, 5], 4), true);
    });
    it('Should return false if there isn\'t a pair of integers in the array that add to the target.', () => {
      assert.equal(arrays.findPair([1, 2, 3, 4, 5], 90), false);
    });
  });

  describe('#removeDuplicates(arr)', () => {
    it('Should return an array without duplicate integers.');
  });

  describe('#findDuplicate(arr)', () => {
    it('Should return the duplicate integer.');
  });

  describe('#maximumSubarray(arr)', () => {
    it('Should return an integer value of the length of the maximum sub array.', () => {
      assert.equal(arrays.maximumSubarray([1, 2, 3, 4, -1]), 10);
    });
  });

  describe('#findPeak(arr)', () => {
    it('Should return an integer value of the peak of the array.');
    it('Should return negative infinity if the array is empty.');
  });

  describe('#findProductExceptSelf(arr', () => {
    it('Should return the product of the array except for itself.')
  })
});
