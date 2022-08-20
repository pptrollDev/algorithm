let num = 11;
let k = 2;
let arr = [];

while(num>0){
  let share = Math.floor(num/k);
  let hex = (num%k).toString(k);
  arr.push(hex);
  num = share;
}


while(arr.length>0){
  console.log(arr.pop());
}
