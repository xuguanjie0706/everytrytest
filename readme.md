# 每日一题

## 第一题 两数之和

```
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

console.log(twoSum([1,2,3,4,5],9));
```
