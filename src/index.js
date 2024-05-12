/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for (let i in nums)  {
       if((target - nums[i]) in obj){
         return [obj[target - nums[i]],i]
       }
       obj[nums[i]] = i
    }
    console.log('No two sum solution');
};

// console.log(twoSum([1,2,3,4,5],9));




/**
 * 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length==1){
        return [strs]
    }
    let obj = {}
    for (let str of strs){
        let key = [...str].sort().toString()
        if(key in obj ){
            obj[key].push(str)
        } else{
            obj[key] = [str]
        }
    }
    return Object.values(obj)
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))




/* 无重复字符的最长子串  */
var lengthOfLongestSubstring = function(s) {
    let res = 0
    let arr = []
    let n = s.length
    for(let i=0;i<n;i++){
        const idx = arr.indexOf(s[i])
        arr.push(s[i])
        if(idx === -1){
            res = Math.max(res,arr.length)
        }else{
            arr =  arr.slice(idx+1)
        }
    }
    return res
};


// console.log(new Set([1,2,3] ) == new Set([1,2,3] ),2)













/**
 * 
 * 先排列组合，然后滑动窗口
 *  */ 

var findAnagrams = function(s, p) {
    const anagrams = str => {
        if (str.length <= 2) {
               return str.length === 2 ? [str, str[1] + str[0]] : [str];
            }
        else{
            return str.split('').reduce((acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
          }
      };
   const arr =  anagrams(p)
   let ans= []
   let str = ""
   for (let i in s){
        str+=s[i]
        console.log(str,8);
        if(i<p.length-1){
            continue 
        }
        
       if(arr.includes(str)){
         ans.push(i-(p.length-1))
       }
        str = str.substring(1)
    
   }
   return ans
    
};

// console.log(findAnagrams("cbaebabacd","abc"))




var maxSlidingWindow = function(nums, k) {
    let res = []
    let max = 0
    let arr = []
    for (let i = 0 ;i<nums.length;i++){
        if(i<k){
            res.push(nums[i])
            arr = res
            max+=nums[i]
        }else{
           const d =  arr.shift()
           arr.push(nums[i])
           let tamp = max
           tamp -= d
           tamp += nums[i]
           if(max > tamp){

           }else{
             max = tamp
             res = arr
           }
        }
    }
    return res
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)



function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    // let carry= 0
    // let headNode = null
    // let tailNode= null
    // while(l1||l2){
    //     const n1 = l1?l1.val:0
    //     const n2 = l2?l2.val:0
    //     const sum = n1+n2+carry
    //     const n = sum % 10
    //     if(!headNode){
    //         headNode = tailNode = new ListNode(n)
    //     }else{
    //         tailNode.next = new ListNode(n)
    //         tailNode = tailNode.next
    //     }
       
    //     carry = sum >= 10?1:0
    //     if(l1){
    //         l1= l1.next
    //     }
    //     if(l2){
    //         l2=l2.next
    //     }
      
    // }
    //     if(carry){
    //             tailNode.next = new ListNode(carry)
    //         }
    //         return headNode

    

    let carry = 0 
    let headNode = null
    let tailNode = null
    while(l1||l2){
        let n1 = l1?l1.next:0
        let n2 = l2?l2.next:0
        const sum = n1+n2
        const n = sum%10
        if(!headNode){
            headNode = tailNode = new ListNode(n)
        }else{
            tailNode.next = new ListNode(n)
            tailNode = tailNode.next
        }
        carry = sum>10?1:0
        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
        if(carry){
            tailNode.next = new ListNode(1)
        }
        return headNode
    }
};




// console.log(addTwoNumbers([2,4,3],[5,6,4]))

/* 漩涡矩阵 */
var spiralOrder = function(matrix) {
    let x = 0 
    let y = 0
    let circle = 0 
    let len = matrix.length *matrix[0].length
    let ans = []
    let way = 1 //1:right 2:down 3:left 4:top

    for(let i = 0;i<len;i++){
        ans.push(matrix[y][x])
        switch(way){
            case 1:
                if(matrix[0].length - x - circle > 1){
                    x++
                }else{
                    way++
                    y++
                }
                break
            case 2:
                if(matrix.length - y - circle  > 1){
                    y++
                }else{
                    way++
                    x--
                }
                break
            case 3:
                if( x - circle > 0){
                    x--
                }else{
                    way++
                    y--
                    circle++
                }
                break
            case 4:
                if(y - circle > 0){
                    y--
                }else{
                    way=1
                    x++
                }
                break                
        }
    }
    console.log(ans);
    return ans
};


// spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]])


// 1 2  3  4
// 5 6  7  8
// 9 10 11 12
// 1314 15 16
// 1718 19 10






/**
 * 旋转图像
 */
var rotate = function(matrix) {
    const n = matrix.length;
        // 注意范围
        for(let i = 0; i < Math.floor(n / 2); i++) {
            for(let j = i; j < n-1-i; j++) {
                let tmp = matrix[i][j]; // 临时变量
                matrix[i][j] = matrix[n-1-j][i]; // 左上 = 左下
                matrix[n-1-j][i] = matrix[n-1-i][n-1-j]; // 左下 = 右下
                matrix[n-1-i][n-1-j] = matrix[j][n-1-i]; // 右下 = 右上
                matrix[j][n-1-i] = tmp; // 右上 = 左上
            }
        }
    };


var isValid = function(s) {
        if(s.length===0){
            return true
        }
        if(s.length%2){
            return false
        }
        let obj={
            "(":")",
            "{":"}",
            "[":"]"
        }
        let arr = []
        for(let ch of s){
            if(ch in obj){
                arr.push(obj[ch])
            }else{
                if(!arr.length || ch!==arr[arr.length-1]){
                    return false
                }
                arr.pop()
            }
        }
        return !arr.length
    };

console.log(  isValid("()"));


/**
 * 移掉K位数字
 */

var removeKdigits = function(num, k) {
    if(k>=num.length){
        return "0"
    }
    let arr = []
    for(let i of num){
        while(arr.length>0 && arr[arr.length-1]>i&&k){
            arr.pop()
            k--
        }
        arr.push(i)
    }
    let ans = ""
    let isLeftZore = true
    for(let i of arr){
        if(i==="0" && isLeftZore){
            isLeftZore = false
        }else{
            ans +=i
        }
    }
    return ans
};

/* 去除重复字母 */

var removeDuplicateLetters = function(s) {

};






  






