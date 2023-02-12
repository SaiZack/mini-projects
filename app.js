var submit = document.getElementById("submit");
const form = document.getElementById("form");
submit.addEventListener('click', function(){
  if(form.checkValidity()) {
    window.location.href = 'https://love-letter-for-ngel.netlify.app/';
  }
})