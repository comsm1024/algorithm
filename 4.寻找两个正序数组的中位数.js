/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let mid = Math.floor((m + n) / 2);
    let i = 0, j = 0;
    while (i + j < mid) {
        if (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                i++;
            } else {
               j++; 
            }
        }
    }
    if (i < m && j < n) {
        return nums1[i] < nums2[j] ? nums1[i] : nums2[j];
    } else if (i < m) {
        return nums1[i];
    } else {
        return nums2[j];
    }
};
// @lc code=end

