

function sendMail() {
  // getName
  // getBusinessName
  // getEmail
  // getType
 var name = document.getElementById("name").value;
 var business = document.getElementById("business").value;
 var email = document.getElementById("email").value;
 var dropdown = document.getElementById("dropdown").value;
 var how = document.getElementById("how").value;


 var template_params = {
   "reply_to": email,
   "from_name": name,
   "name": name,
   "business": business,
   "email": email,
   "dropdown": dropdown,
   "how": how
};

var service_id = "default_service";
var template_id = "template_1SvvVysN";
emailjs.send(service_id, template_id, template_params);
}

function success() {

alert("Your Email Was Successfully Sent!");


  //site key 6LeNLqoUAAAAAGOd386OPuSlB8zBSkMdi0UrfTaL
  //secret key 6LeNLqoUAAAAAFz7HHjHqCAuTdeGNs8JgDKkRKKK


}







emailjs.send('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
