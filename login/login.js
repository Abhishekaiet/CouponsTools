  // Wait for the DOM to be ready
	
  $(function() {
      // Initialize form validation on the registration form.
      // It has the name attribute "registration"
	   
	  $("#buttonsignup").click(function() {
			window.location.href = "Signup.html";
		});
      $("form[name='registration']").validate({
          // Specify validation rules
          rules: {
              // The key name on the left side is the name attribute
              // of an input field. Validation rules are defined
              // on the right side
              username: "required",
              password: "required",


          },
          // Specify validation error messages
          messages: {
              username: "Please enter your Email Id",
              password: "Please enter your password",

          },
          // Make sure the form is submitted to the destination defined
          // in the "action" attribute of the form when valid
          submitHandler: function(form) {
              login();
          }
      });
  });
  function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
  function onload() {
	 const token = sessionStorage.getItem('_token');
	  if(token){
		window.location.href = "landing_page.html";
	   }
	   $("#usernm").val(getCookie('LoginEmail'));
	  $("#pass").val(getCookie('Password'));
  }
  
   function openForgotScreen() {
	 const token = sessionStorage.getItem('_token');
	  if(token){
		window.location.href = "landing_page.html";
	   }
	  $(".container").hide();
	  $(".forgotScreen").show();
  }
   function sendEmail() {
	   var value = $("#forgetpassword").val()
	   if(!value){
		   alert("sss");
		   
	   } 
	   const data = {
			"email": value,
			"resetApp": "recoverpass://?Authorization=%s"
		};
	   const userAction = async () => {
		  const response = await fetch('https://proxy.actv.05media.com:443/services/v1/profiles/action/reset', {
			method: 'POST',
			body:  JSON.stringify(data), // string or object
			headers: {
			  'Content-Type': 'application/json',
			  'Accept': 'application/json',
			  'cache-control': 'no-cache'
			}
		  });
		  const responseCode = await response.ok;
		  const responsejson = await response.json();
		  if(responseCode){
			  $(".forgotConfirm").show();
			  $(".forgotScreen").hide();
		  }
		}
		userAction();
   }
   function closeconfirm(){
	   $(".forgotConfirm").hide();
       $(".container").show();
   }
  function login() {
      //debugger
      let username = document.getElementById("usernm").value
      let password = document.getElementById("pass").value;
      let grant_type = document.getElementById("grant_type").value = "password";
      let client_id = document.getElementById("client_id").value = "web"
      let client_secret = document.getElementById("client_secret").value = "2567a5ec9705eb7ac2c984033e06189d"
	  const loginAction = async () => {
			  const response = await fetch('https://proxy.actv.05media.com/oauth/token?grant_type=password&username=' + username + '&client_id=web&client_secret=2567a5ec9705eb7ac2c984033e06189d&password=' + password, {
				method: 'GET',
				headers: {
				  'Content-Type': 'application/json'
				}
			  });
			  const loginData = await response.json();
			  let token = loginData.access_token;
			  let type = loginData.token_type;
			  sessionStorage.setItem('_token', type +' '+token);
			  sessionStorage.setItem('checkout', type +' '+token);
			  if (loginData.error) {
				  $("#loader").css('display',"none");
				  window.sessionStorage.removeItem("_token");
				  iziToast.error({
					  title: 'Error',
					  message: 'Wrong username or password'
				  });

			  } else {
				  const userDataAction = async () => {
				  const response = await fetch('https://proxy.actv.05media.com:443/services/v1/profiles/me', {
						method: 'GET',
						headers: {
						  'Accept': 'application/json',
						  'Authorization':  sessionStorage.getItem('_token'),
						  'Content-Type': 'application/json'
						}
					  });
					  const userData = await response.json();
					  console.log(userData);
					  sessionStorage.setItem('userProfilePic', userData.user.gravatarURL);
					  sessionStorage.setItem('vendor', userData.user.fullName);
					  sessionStorage.setItem('fname', userData.user.firstname);
					  sessionStorage.setItem('lname', userData.user.lastname);
					  sessionStorage.setItem('email', userData.user.email);
					  sessionStorage.setItem('sinid', userData.user.sinUsername);
					  sessionStorage.setItem('role', userData.user.roles[0]);
					  sessionStorage.setItem('telephone', userData.business.phoneNumber);
					  if(userData.user.businessPackages == null){
						  sessionStorage.setItem('package', 'Standard');
					  } else {
						  sessionStorage.setItem('package', userData.user.businessPackages);
					  }
					   if(userData.user.businessUser){
						window.location.href = "landing_page.html";
					   } else {
						   $("#loader").css('display',"none");
						   sessionStorage.setItem('checkout', sessionStorage.getItem('_token'));
						   window.sessionStorage.removeItem("_token");
						   iziToast.error({
							  title: 'Error',
							  message: 'You are not a business user'
						  });
						  window.location.href = "Signup.html?business=1&id="+username;
					   }
				  }
				  userDataAction()
			  }
		}
		$("#loader").css('display',"block");
		loginAction();

  }