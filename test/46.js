func ();

function func () {
  let arr = [1, 2, 3];
  let disconnect = 5;
  let sum = 0;

  arr.forEach(val => sum += val);

  if(sum<=disconnect){
    console.log(-1);
    return;
  }


  let pos = -1;
  let cnt = 0;

  while(1){
    pos += 1;

    if(pos>arr.length-1)
      pos = 0;

    if(arr[pos]>0){
      arr[pos] -= 1;
      cnt += 1;
    }

    if(cnt===disconnect)
      break;
  }

  if(pos+1>arr.length)
    console.log(1);
  else
    console.log(pos+1); 
}