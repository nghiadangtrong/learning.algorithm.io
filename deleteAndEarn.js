/*
* Source: https://thefullsnack.com/posts/dynamic-programming.html
* ---------------------------------------------------------------
* nums.length = max(20000) ;  nums[i] = {1, 10000}
* F(x) = max( F(x-1), F(x-2) + x*count(x) ) 
*
* determine: F(x-1), F(x-2), _valueCount = x*count(x) 
*/


function deleteAndEarn(nums= []){
  if(nums.length <= 0 ){
    return 0;
  }
  const maxNums   = 10000;
  let _valueCount = Array.from(Array(maxNums+1)).map(_=> 0); // Tao mang 10001 phan tu because max=10000
  
  for(let i = 0; i < nums.length; i++){
    _valueCount[nums[i]]  += nums[i];        // value    
  }
  
  let points  = Array.from(Array(maxNums+1)).map((_, index) => _valueCount[index]);
  
  for(let i = 2; i <= maxNums; i++){
    points[i] = Math.max(points[i-1], points[i-2] + _valueCount[i]);
  }
  return points[maxNums];
}
/*
Exception: SyntaxError: expected expression, got '*'
@Scratchpad/1:2
*/

console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
console.log(deleteAndEarn([1,2,3,4,5,6]))