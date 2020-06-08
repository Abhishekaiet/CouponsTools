  // Wait for the DOM to be ready

  $(function() {
      // Initialize form validation on the registration form.
      // It has the name attribute "registration"
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

  function onload() {
	 const token = localStorage.getItem('_token');
	  if(token){
		window.location.href = "landing_page.html";
	   }
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
			  localStorage.setItem('_token', type +' '+token);
			  if (loginData.error) {
				  $("#loader").css('display',"none");
				  window.localStorage.removeItem("_token");
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
						  'Authorization':  localStorage.getItem('_token'),
						  'Content-Type': 'application/json'
						}
					  });
					  const userData = await response.json();
					  console.log(userData);
					  localStorage.setItem('userProfilePic', userData.user.gravatarURL);
					  localStorage.setItem('sinid', userData.user.sinUsername);
					   if(userData.user.businessUser){
						window.location.href = "landing_page.html";
					   } else {
						   $("#loader").css('display',"none");
						   window.localStorage.removeItem("_token");
						   iziToast.error({
							  title: 'Error',
							  message: 'You are not a business user'
						  });
					   }
				  }
				  userDataAction()
			  }
		}
		$("#loader").css('display',"block");
		loginAction();

  }