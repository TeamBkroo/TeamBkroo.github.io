
function searchProduct() {
    let input = document.getElementById('search-box').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('prod');
      
    for (i = 0; i < x.length; i++) { 
        
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="list-item";

        }
        else {
            x[i].style.display="none";
        }
        if(input == ""){
            x[i].style.display="none";
        }
    }
    
}

function del() {
    let y = document.getElementById("search-box");
    let x = document.getElementsByClassName('prod');
    if(y.value != ""){
        y.value = "";

    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display="none";
    }
}
