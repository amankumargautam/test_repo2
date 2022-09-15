let obj={
  name:"aman",
  salary:50000,
  hobbies:["coding","biking",'Movies']
};
for (let i=0;i<=3;i++){
  obj["hobbies"].push(i*i);
}
console.log(obj.hobbies[5]);
