const arr = [1, 2, 4, 8, 9];
const num = 3;

let res;
let lt = 0;
let rt = 9;

while(lt<=rt){
  let mid = Math.floor((lt+rt)/2);
  console.log('mid',mid);
  
  if(count(mid)){
    lt = mid + 1;
    res = mid;
  } else {
    rt = mid - 1;
  }
}

console.log('res', res);

function count(v){
  let cnt = 1;
  let position = arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i] - position >= v){
      cnt += 1;
      position = arr[i];
    }
  }
  
  console.log('cnt', cnt);
  
  if(cnt >= num)
    return true;
  else 
    return false;
}