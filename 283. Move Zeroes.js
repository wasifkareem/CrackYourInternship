/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    var twoSum = function (nums, target) {
      const map = new Map();
      for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
        else map.set(nums[i], i);
      }
    };
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
};
