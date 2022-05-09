function noValue(){
    
        if(document.getElementById('NameOnSignup').value =='' || document.getElementById('NameOnSignup').value==null){
            alert("Please fill the box");
            return;
        }
        if(document.getElementById('PhoneOnSignup').value =='' || document.getElementById('PhoneOnSignup').value ==null){
            alert("Please fill the box");
            return;
        }
        if( document.getElementById('AddressOnSignup').value =='' ||  document.getElementById('AddressOnSignup').value == null){
            alert("Please fill the box");
            return;
        }
        if(document.getElementById('usernameSS').value=='' || document.getElementById('usernameSS').value ==null){
            alert("Please fill the box");  
            return;
        }
        if(document.getElementById('passwordSS').value=='' || document.getElementById('passwordSS').value==null){
            alert("Please fill the box");
            return;
    
        }
        
    
        window.location.href ="index.html";
        alert("thank you");
        


}




