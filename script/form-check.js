
			function validateForm(){
				var name = document.getElementById("name");
				var email = document.getElementById("email");
				var email_at_position = email.value.indexOf("@");
				var email_dot_position = email.value.lastIndexOf(".");
				var location = document.getElementById("location");
				var phone = document.getElementById("phone");
				var textarea = document.forms["myForm"]["textarea"];
				var count = 0;
				var alertMessage = "";
				
				
				if (name.value == null || name.value == ""){
					name.style.borderColor = "red";
					count = count+1;
					alertMessage = "Fill the <b>name</b> field!";
					document.getElementById('nameAlert').innerHTML = alertMessage;
				}
				else {
					name.style.borderColor = "#aaa";
					document.getElementById('nameAlert').innerHTML = "";
				}
				
				
				if (email_at_position < 1 || email_dot_position < email_at_position+2 || email_dot_position+2 > email.value.length){
					email.style.borderColor = "red";
					count = count+1;
					alertMessage = "<b>E-mail</b> field is empty or is in wrong format!";
					document.getElementById('emailAlert').innerHTML = alertMessage;
				}
				else {
					email.style.borderColor = "#aaa";
					document.getElementById('emailAlert').innerHTML = " ";
				}
				
				if (location.value == null || location.value == ""){
					location.style.borderColor = "red";
					count = count+1;
					alertMessage = "Fill the <b>location</b> field!";
					document.getElementById('locationAlert').innerHTML = alertMessage;
				}
				else {
					location.style.borderColor = "#aaa";
					document.getElementById('locationAlert').innerHTML = " ";
				}
			
				if (!(phone.value == null || phone.value == "") && isNaN(phone.value) == true){
					phone.style.borderColor = "orange";
					count = count+1;
					alertMessage = "Telephone <b>number</b> is not numeric!";
					document.getElementById('phoneAlert').innerHTML = alertMessage;
				}
				else {
					phone.style.borderColor = "#aaa";
					document.getElementById('phoneAlert').innerHTML = " ";
				}
				
				if (textarea.value == null || textarea.value == ""){
					textarea.style.borderColor = "red";
					count = count+1;
					alertMessage = "You must write something!";
					document.getElementById('textareaAlert').innerHTML = alertMessage;
				}
				else {
					textarea.style.borderColor = "#aaa";
					document.getElementById('textareaAlert').innerHTML = " ";
				}
				
				
				if(count > 0){
					return false;
				}
				else{
					document.getElementById('form').innerHTML = "<h1 style='color:green;font-size:30px;'>Congratulations! <br/>You're VERY good in filling forms!<br/>Your email has been sent!</h1>";
					return true;
				}
				
				
			}
		
