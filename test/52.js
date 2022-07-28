const num = 1500;
let arr = [0,1];
let num2 = 1;
let num3 = 1;
let num5 = 1;

for(let i=2; i<=num; i++){
  let min;
  if(arr[num2]*2 < arr[num3]*3)
    min = arr[num2]*2;
  else
    min = arr[num3]*3;
  
  if(arr[num5]*5 < min)
    min = arr[num5]*5;
  
  if(min === arr[num2]*2)
    num2 += 1;
  
  if(min === arr[num3]*3)
    num3 += 1;
  
  if(min === arr[num5]*5)
    num5 +=1;
  
  arr[i] = min;
}

console.log(arr[num]);