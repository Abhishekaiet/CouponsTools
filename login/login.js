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





  function login() {
      debugger
      let username = document.getElementById("usernm").value
      let password = document.getElementById("pass").value;
      let grant_type = document.getElementById("grant_type").value = "password";
      let client_id = document.getElementById("client_id").value = "web"
      let client_secret = document.getElementById("client_secret").value = "2567a5ec9705eb7ac2c984033e06189d"

      // if (username == "" || password == "") {
      //     alert("Missing Field value")
      //     return;
      // }

      // Create a request variable and assign a new XMLHttpRequest object to it.
      var request = new XMLHttpRequest();


      // Open a new connection, using the GET request on the URL endpoint
      request.open('GET', 'https://proxy.actv.05media.com/oauth/token?grant_type=password&username=' + username + '&client_id=web&client_secret=2567a5ec9705eb7ac2c984033e06189d&password=' + password, true);

      //   request.open('GET', 'http://6977d39e.ngrok.io/oauth/token?grant_type=password&username=' + username + '&client_id=android_phone&client_secret=c48da1c8110e4f15dab1a0d52b0609ce&password=' + password, true);


      // let emailid = username
      // let _passwor = password
      // let res = user.concat(passw);
      request.onload = function() {

          let data = JSON.parse(this.response);
          console.log(data)
          let token = data.access_token
          localStorage.setItem('_token', token);
          if (data.error) {

              iziToast.error({
                  title: 'Error',
                  message: 'Wrong username or password'
              });

          } else {

              window.location.href = "http://localhost/webstdio27april/creatingcoupons.html";
          }

      }

      //   window.localStorage.setItem(key, value);
      // Send request
      request.send();


  }