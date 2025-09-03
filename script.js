function sayHello() {
  alert("Hello Ashu! Welcome to your practice website 🚀");
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  document.getElementById("message").innerText =
    `Thanks ${name}! We received your message from ${email}.`;
    
  return false;
}
