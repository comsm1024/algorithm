/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        // 跳过重复的元素
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (0 === sum) {
                results.push([nums[i], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--

                left++ 
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return results
};
// @lc code=end

