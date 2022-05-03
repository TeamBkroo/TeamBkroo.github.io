// Global variable 	
	var Siginup_username=localStorage.getItem("Siginup_Local_username");
	var Siginup_password=localStorage.getItem("Siginup_Local_password");

	var Login_username=localStorage.getItem("Login_Local_username");
	var Login_password=localStorage.getItem("Login_Local_password");

//for sigin up page	
function siginup() {
	localStorage.setItem('Siginup_Local_username',document.getElementById('usernameSS').value);
	localStorage.setItem('Siginup_Local_password',document.getElementById('passwordSS').value);
	var Siginup_username=localStorage.getItem("Siginup_Local_username");
	var Siginup_password=localStorage.getItem("Siginup_Local_password");
}

//This function used to display an error message if the user input something wrong
function ERROR_MSG() {
	document.getElementById('Messg').innerHTML='Error: your password or username wrong <br>Press Ctrl+ F5 twice and try again';
	document.getElementById('Messg').style.color='#800000';
	return;
}

//This fun used in log in page to verfied if the user sigin in or not
function validation() {
	localStorage.setItem('Login_Local_username',document.getElementById('useremail').value);
	localStorage.setItem('Login_Local_password',document.getElementById('userpassword').value);
	

	if(Login_username == Siginup_username){
		//This if condition for check if the user really insert a value or just click login without value
		if( Login_username == '' || Login_username == null){
			if(Login_password =='' || Login_password == null){
				ERROR_MSG();
				return ;
			}
		}
	
		if(Login_password === Siginup_password){
			return window.location.href ="index.html";
		}

	}
	else{
		ERROR_MSG();
		return;
	}

	
	
}