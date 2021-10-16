/// TODO fix and validate array algorithms

/**
 * Find a pair that sums up to k
 *
 *  @param {int []} arr - Array to search for the sum
 *  @param {number} k  - Target sum
 *  @returns {boolean} - Whether or not there is a pair
 *
 */

function findPair(arr, k) {
  const ht = {};
  for (let i = 0; i < arr.length; i++) {
    if (ht[k - arr[i]]) {
      return true;
    }
    ht[arr[i]] = true;
  }
  return false;
}

/**
 * Remove duplicates from an array
 *
 * @param {int []} - Integer array to find a duplicate
 * @returns {string []} - Int array without duplicates
 *
 */

function removeDuplicates(arr) {
  const visited = {};
  for (const x of arr) {
    visited[x] = true;
  }
  return (Object.keys(visited));
}

/**
 * Find duplicate in array { assumes n+1 elements between 1 and n }
 *
 * @param {int []} - Integer array that has duplicates
 * @returns {int} - Duplicate number
 *
 */

function findDuplicate(arr) {
  const visited = {};
  let duplicate;
  for (let x = 0; x < arr.length; x++) {
    if (visited[arr[x]]) duplicate = arr[x];
    else visited[arr[x]] = true;
  }
  return Math.max(-Infinity, duplicate);
}

/**
 * Find max sub array
 *
 * @param {int []} - Integer array to check for max sub array
 * @returns {number} - Max Sum
 *
 */

function maximumSubarray(arr) {
  let maximum = -Infinity;
  let localMax = 0;
  for (const i of arr) {
    localMax = Math.max(i, localMax + i); // Should we take this one or current sum?
    maximum = Math.max(maximum, localMax); // Is this or the current max more?
  }
  return maximum;
}

/**
 * Find peak in arr
 *
 * @param {int []} - Input array of int []
 * @returns {number} - first peak of array
 *
 */

function findPeak(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((i === 0 || arr[i] >= arr[i - 1]) && (i === arr.length - 1 || arr[i] >= arr[i + 1])) {
      return i;
    }
  }
  return -Infinity;
}

/**
 * Get product of array except current index
 *
 * @param {int []} - Int array of values to check
 * @returns {int []} - Int [] with products
 */

function productExceptSelf(arr) {
  const n = arr.length;
  const cumulativeFromLeft = [...Array(n)].map((x) => 0);
  cumulativeFromLeft[0] = 1;
  for (let i = 1; i < n; i++) {
    cumulativeFromLeft[i] = cumulativeFromLeft[i - 1] * arr[i - 1];
  }

  const cumulativeFromRight = [...Array(n)].map((x) => 0);
  cumulativeFromRight[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    cumulativeFromRight[i] = cumulativeFromRight[i + 1] * arr[i + 1];
  }

  const output = [...Array(n)].map((x) => 0);
  for (let i = 0; i < n; i++) {
    output[i] = cumulativeFromLeft[i] * cumulativeFromRight[i];
  }
  return output;
}

module.exports = {
  findPair,
  removeDuplicates,
  findDuplicate,
  maximumSubarray,
  findPeak,
  productExceptSelf
};
