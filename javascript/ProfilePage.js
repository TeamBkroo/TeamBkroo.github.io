//This function transfare data from Sigin up to prfole page 
function TransfareFun(){
	localStorage.setItem("NAME",document.getElementById('NameOnSignup').value);
	localStorage.setItem("EMIL",document.getElementById('usernameSS').value);
	localStorage.setItem("ADDRESS",document.getElementById('AddressOnSignup').value);
	localStorage.setItem("PHONE",document.getElementById('PhoneOnSignup').value);
}
