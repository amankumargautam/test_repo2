// Problem 4: Print the average of even numbers from 1 to 100 (both included)
let i = 1;
let sum = 0;
let count = 1;
//let avg = sum / count;
while(i<=100&&i%2==0){
    sum=sum+i;
   
  i++;
  
}
count++;
console.log(sum/count);
