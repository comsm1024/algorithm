/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
    return countingSort(stock, cnt, 10000)
};

const countingSort = (stock, cnt, maxValue) => {
    let bucket = new Array(maxValue)
    let sortedIndex = 0
    let bucketLength = maxValue
    let arrLen = stock.length

    for (let i = 0; i < arrLen; i++) {
        if (!bucket[stock[i]]) {
            bucket[stock[i]] = 0
        }
        bucket[stock[i]]++
    }

    let res = []
    for (let j = 0; j < bucketLength; j++) {
        while(bucket[j]-- > 0 && sortedIndex < cnt) {
            res[sortedIndex++] = j
        }
        if (sortedIndex === cnt) {
            break
        }
    }
    return res
}