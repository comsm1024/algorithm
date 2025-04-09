/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const LEN = intervals.length
    if (LEN < 2) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])

    let res = []
    let i = 0
    while (i < LEN) {
        let j = i + 1

        let cur = [...intervals[i]]
        while (j < LEN && intervals[j][0] <= cur[1]) {
            cur[1] = Math.max(intervals[j][1], cur[1])
            j++
        }
        res.push(cur)
        i = j
    }
    return res
};
// @lc code=end
