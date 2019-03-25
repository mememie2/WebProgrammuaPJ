function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username + " " + password);
  var data = {
    username: username,
    password: password
  };

  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/api/login",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (customer) {
      var result = JSON.stringify(customer);
      console.log(result);
      if (JSON.stringify(customer) == "true") {
        alert("Login Successful!");
        window.location = "./../../main/main.html";
      } else {
        alert("Login Incorrect!");
      }
    },
    error: function (e) {
      console.log("ERROR: ", e);
    }
  });
}
