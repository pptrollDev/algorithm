let arr = [0, 0, 0, 0, 0 ,0 ,0, 0];
let num = 3;
let pos = -1;
let cnt = 0;
let br = 0;

while(1){
  pos += 1;
  if(pos>arr.length-1)
    pos = 0;
 
  if(arr[pos]===0){
    cnt += 1;
    
    if(cnt===num){
      cnt = 0;
      br += 1;
      arr[pos] = 1;
    }
  }
  
  if(br===arr.length-1){
    break;
  }
}

console.log(arr);