const assert = require('assert');
const strings = require('../lib/algorithms/strings/stringAlgorithms');
const arrays = require('../lib/algorithms/arrays/arrayAlgorithms');

/**
 *
 *  Array Algorithm  Tests
 *
 */

describe('Array Algorithms', () => {
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
  });
});

/**
 *
 *  String Algorithm tests
 *
 */

describe('String Algorithms', () => {
  describe('#logestPalindrome(str)', () => {
    it('Should return the length of the longest palindrome in the string.');
  });

  describe('#firstRepeatingChar(str)', () => {
    it('Should return the first repeating character in the string', () => {
      assert.equal(strings.firstRepeatingChar('bcdd'), 'd');
    });
    it('Should return \'No repeating Chars\' if there isn\'t a repeating character in the string.', () => {
      assert.equal(strings.firstRepeatingChar(''), 'No repeating Chars');
    });
  });

  describe('#withoutRepeatingChar(str)', () => {
    it('Should return false if there are repeating characters in the string.', () => {
      assert.equal(strings.withoutRepeating('aab'), false);
    });
    it('Should return true if there aren\'t any repeating characters in the string.', () => {
      assert.equal(strings.withoutRepeating('avb'), true);
    });
  });

  describe('#longestSubstringWithoutRepeating(str)', () => {
    it('Should return the length of the longest substring without a repeating character.', () => {
      assert.equal(strings.longestSubstringWithoutRepeating('abcdefgg'), 7);
    });
    it('Should return \'0\' if the string is not provided.', () => {
      assert.equal(strings.longestSubstringWithoutRepeating(''), 0);
    });
    it('Should return \'1\' if there is only one element in the string.', () => {
      assert.equal(strings.longestSubstringWithoutRepeating('a'), 1);
    });
  });
});
