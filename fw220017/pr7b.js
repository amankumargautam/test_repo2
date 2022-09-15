// Given an array of string count the overall total number of characters
let total= 0;
let arr = ["aman","nishant","sandeep"];
for(let i=0;i<=arr.length-1;i++){
total =total+arr[i].length;
}
console.log(total);