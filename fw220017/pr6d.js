 //Given an array of numbers find the average of all the even numbers.
let arr = [1,2,3,4,5,6];
let count=0;
let sum = 0;
for (let i=0;i<=arr.length-1;i++){
  sum = sum + arr[i];
  count++;

}
console.log(sum/count);