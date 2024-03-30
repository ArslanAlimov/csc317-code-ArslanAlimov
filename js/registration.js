function validateReg() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var passValidation = document.getElementById("confpassword").value;
  var message = document.getElementById("message");
  var error_message = "";
  var passChk = false;
  var usrChk = false;
  var alphanum = /^[a-z0-9]+$/;
  if (
    ("a" > username[0] || username[0] > "z") &&
    ("A" > username[0] || username[0] > "Z")
  ) {
    error_message += "Username must start with a-z or A-Z.<br>";
  }

  else if (username.length < 3 || !alphanum.test(username)) {
    error_message +=
      "Username needs to include 3 or more AlphaNum Char .<br>";
  } else {
    usrChk = true;
  }
  var num = /[0-9]/;
  var upperCase = /.*[A-Z].*/;  
  var specialchar = /.*[!@#&*\^\)\(\$/-].*/;
  if (password.length < 8) {
    error_message += "Password must be 8 or more symbols.<br>";
  }
  // check at least one number
  else if (!num.test(password)) {
    error_message += "Password must contain at least one number.<br>";
  }
  // check at least one Uppercase letter
  else if (!upperCase.test(password)) {
    error_message += "Password must contain at least one Uppercase Letter.";
  }
  // check at least one special char
  else if (!specialchar.test(password)) {
    error_message +=
      "Password must contain one special character.(/*-+!@#$^&*).<br>";
  }

  else if (password !== passValidation) {
    error_message += "Both Passwords must be same!";
  } else {
    passChk = true;
  }
  if (usrChk && passChk) {
    document.getElementById("RegForm").submit();
  } else {
    message.innerHTML = error_message;
    message.style.color = "Blue";
  }
}