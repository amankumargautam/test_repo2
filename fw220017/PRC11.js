A=[2,-4,6,8,-9];
bag ="";
for(i=0;i<=A.length-1;i++){
  if(A[i]<0){
  A[i]=0;
  bag=bag+A[i];
}else {
  bag=bag + A[i];
}
}
console.log(bag)

