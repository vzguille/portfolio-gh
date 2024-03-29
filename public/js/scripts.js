

function rollin() {
  var reveals = document.querySelectorAll(".rollin");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rollin);



const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  firebase.database().ref('contacts').push({
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(() => {
    form.reset();
    alert('Message sent successfully!');
  })
  .catch((error) => {
    alert('Error sending message: ' + error.message);
  });
});

