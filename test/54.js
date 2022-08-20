const str = '()()(()())';
let arr = [];
let res = 'YES';

for(let i=0; i<str.length; i++){
  if(str[i]==='(')
    arr.push(1);
  else{
    if(arr.length===0){
      res = 'NO';
      break;
    } else {
      arr.pop(); 
    }
  }
}

if(arr.length>0)
  res = 'NO';

console.log(res);
