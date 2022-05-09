//products

let index = 0;
let l = document.getElementsByClassName("product");
let a = l.length;
let b = a - 4; 

  let i;
  for(i=0; i<4 ;i++){
    l[i].style.display = "grid";
  }


function plus(n){
    if(index >= b){
        index=0;
    }
  if(n == 1){
    l[index].style.display = "none";
    l[a-b+index].style.display = "grid";
  }
  else{
    l[index].style.display = "grid";
    l[a-b+index].style.display = "none";
  }
  index++;
}