/**
 * 187.寻找重复数
 * 快慢指针 
 * like 141. 环形链表，142. 环形链表 II
 *  */
var singleNumber = function(nums) {
    let ans = 0;
       for(let i = 0; i < nums.length; i++){
           ans ^= nums[i];
       }
       return ans;
   };
/**
 * 72.编辑距离
 * 多维动态规划
 *  */ 
var minDistance = function (word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1))
    dp[0][0] = 0

    for (let i = 1; i <= len1; i++) dp[i][0] = dp[i - 1][0] + 1

    for (let i = 1; i <= len2; i++) dp[0][i] = dp[0][i - 1] + 1

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] == word2[j - 1]) 
                dp[i][j] = dp[i - 1][j - 1]
            else
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j-1]) + 1
        }
    }

    return dp[len1][len2]
};

/**
 * 
 *  多维动态规划
 *  最长公共子序列 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    const dp = Array.from(new Array(m+1),()=>Array(n+1).fill(0)) 
    for(let i =1;i<=m;i++){
        const c1= text1[i-1]
        for(let j = 1;j<=n;j++){
            const c2 = text2[j-1]
            if(c1===c2){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
       
    }
     return dp[m][n]
};

/**
 * 
 *  多维动态规划
 *  最长回文字串 */

var longestPalindrome = function(s) {
    if (s.length<2){
        return s
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        // 回文子串长度是奇数
        helper(i, i)
        // 回文子串长度是偶数
        helper(i, i + 1) 
    }

    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--
            n++
        }
        // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
        // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
        if (n - m - 1 > res.length) {
            // slice也要取[m+1,n-1]这个区间 
            res = s.slice(m + 1, n)
        }
    }
    return res
};
/* 最长有效括号  */
var longestValidParentheses = function(s) {
    let ans = 0
    let arr = []

    arr.push(-1)
    for(let i = 0;i<s.length;i++){
        const c = s[i]
        if(c==="("){
            arr.push(i)
        }else{
            arr.pop()
            if(arr.length){
                const curMaxLen = i -arr[arr.length-1]
                ans = Math.max(ans,curMaxLen)
            }else{
                arr.push(i)
            }
        }
    }

    return ans
};