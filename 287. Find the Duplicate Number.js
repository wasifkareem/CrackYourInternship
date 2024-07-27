/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums.sort();
  for (let p1 = 0; p1 < nums.length; p1++) {
    if (nums[p1] === nums[p1 + 1]) return nums[p1];
  }
};
