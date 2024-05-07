
/**
 * 141. 环形链表
 * 快慢指针 
 * like 141. 环形链表，142. 环形链表 II
 *  */

var hasCycle = function(head) {
    let slow =head
    let fast = head
    while (fast &&fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast ===slow){
            return true
        }
    }
    return false
};

/**
 * 142. 环形链表 II
 */

var detectCycle = function(head) {
    let slow = head
    let fast = head
    if (fast == null || fast.next == null) return null;
    // 证明有环
    while (fast &&fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow){
            break
        }
    }
    fast = head
     while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
    return fast;
};


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
 * 187.寻找重复数
 *  */ 
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        slow = 0;
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    
    };



/**
 * 31. 下一个排列
 *   */  
    var nextPermutation = function(nums) {
        let i =nums.length -2 
        // 从右往左遍历拿到第一个左边小于右边的 i,此时 i 右边的数组是从右往左递增的
        while (i>=0&&nums[i]>=nums[i+1]){
            i--;
        }
        if(i>=0){
            let j = nums.length -1
            // 从右往左遍历拿到第一个大于nums[i]的数,因为之前nums[i]是第一个小于他右边的数，所以他的右边一定有大于他的数
            while(j>=0&& nums[j]<=nums[i]){
                j--
            }
            [nums[i],nums[j]] = [nums[j],nums[i]]
        }
    // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
        let l = i +1;
        let r = nums.length -1
        while(l<r){
            [nums[l],nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    };

/**
 * 75.颜色分类
 *  */  

    var sortColors = function(nums) {
        let left = 0
        let right = nums.length -1
        for (let i = 0 ; i <= right;i++){
            if(nums[i]===0){
                [nums[i],nums[left]] = [nums[left],nums[i]]
                left++;
            }else if(nums[i]===2){
                [nums[i],nums[right]] = [nums[right],nums[i]]
                right-- 
                i--
            }
        }
        return nums
    };

    /**
     * 169 多数元素
     * 
     */

    var majorityElement = function(nums) {
        let count = 0;
        let candidate;
        for(let num of nums){
            if(count === 0){
                candidate = num;
            }
            count += (num === candidate) ? 1 : -1;
        }
        return candidate;
    };
