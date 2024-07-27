/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [l, max_area, r] = [0, 0, height.length - 1];

  while (l < r) {
    max_area = Math.max(Math.min(height[l], height[r]) * (r - l), max_area);
    height[r] > height[l] ? l++ : r--;
  }
  return max_area;
};
