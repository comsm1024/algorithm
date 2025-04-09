/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1
    let prev = 1
    let next = 1
    let current = 0
    for (let i = 2; i <= n; i++) {
        current = prev + next
        next = prev
        prev = current
    }
    return current
};
// @lc code=end

