//products

let index = 0;
let l = document.getElementsByClassName("product");
let a = l.length;
let b = a - 4; 
let c = 0;

  let i;
  for(i=0; i<4 ;i++){
    l[i].style.display = "grid";
  }


function plus(n){
    if(c >= b){
        c=0;
    }
  if(n == 1){
    l[index + c].style.display = "none";
    l[a-b+c].style.display = "grid";
  }
  else{
    l[index + c].style.display = "grid";
    l[a-b+c].style.display = "none";
  }
  c++;
}