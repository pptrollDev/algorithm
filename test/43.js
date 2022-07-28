const inputs = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
const num = 3;

let max = 0;
let lt = 0;
let rt = 0;
let mid = 0;

let res = 0;


for(let i=0; i<inputs.length; i++){
  rt += inputs[i];
  if(inputs[i]>max)
    max = inputs[i];
}

while(lt <= rt){
  mid = Math.floor((rt+lt)/2);
  
  if(count(mid) && mid >= max){
      res = mid;
      rt = mid -1;
  } else {
    lt = mid +1;
  }
  
  console.log(res);
}



function count (v){
  let sum = 0;
  let cnt = 1;
  
  for(let i=0; i<inputs.length; i++){
    console.log(v, sum, cnt, sum+inputs[i]);
    if(sum+inputs[i] <= v){
      sum += inputs[i];
    } else {
      sum = inputs[i];
      cnt += 1;
    }
  }
  
  if(cnt <= num){
    return true;
  } else {
    return false;
  }
}
