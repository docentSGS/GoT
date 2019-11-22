window.onload = formsValidate;

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const emailPattern = /^([a-z0-9_-]{1,15}\.){0,3}[a-z0-9_-]{1,15}@[a-z0-9_-]{1,15}\.[a-z]{2,3}$/;
const passPattern = /^\S{8,}$/;
const alphaNumericName = /^[0-9a-zA-Z]+$/;
const commentPattern = /.{20,}$/;

function formsValidate(){
  const mail = document.querySelector('.email');
  const password = document.querySelector('.password');
  const signUp = document.getElementById('signUpBtn');
  const userName = document.querySelector('.userName');
  const house = document.querySelector('.select');
  const comment = document.getElementById('aboutUser');
  const saveData = document.getElementById('saveBtn');

  if (mail) {
    mail.addEventListener('blur', validateEmail);
  }

  if (password) {
    password.addEventListener('blur', validatePassword);
  }

  if (signUp) {
    signUp.addEventListener('click', function(e) {
      e.preventDefault();
      sendInfo();
    });
  }

  if (userName) {
    userName.addEventListener('blur', validateName);
  }

  if (house) {
    house.addEventListener('blur', houseSelect);
  }

  if (comment) {
    comment.addEventListener('input', validateComment);
  }

  if (saveData) {
    saveData.addEventListener('click', function(e) {
      e.preventDefault();
      submitData();
    })
  }

  function validateEmail() {
    if(mail.value.match(emailPattern)){
      mail.classList.remove('input_error');
    } else {
      mail.classList.add('input_error');
    }
    mail.addEventListener('input', validateEmail);
  }

  function validatePassword() {
    if (password.value.match(passPattern)) {
      password.classList.remove('input_error');
    } else {
      password.classList.add('input_error');
    }
    password.addEventListener('input', validatePassword);
  }

  function sendInfo() {
    if (mail.value.match(emailPattern)){
      mail.classList.remove('input_error');
      if (password.value.match(passPattern)){
        password.classList.remove('input_error');
        disp(box2);
      }
    }
  }

  function validateName() {
    if (userName.value.match(alphaNumericName)) {
      userName.classList.remove('input_error');
    } else {
      userName.classList.add('input_error');
    }
    userName.addEventListener('input', validateName);
  }

  function houseSelect() {
    if (house.value=="Select") {
      house.classList.add('input_error');
      document.getElementById('house_note').innerHTML = '<br>Select your house from the list!';
    } else {
      house.classList.remove('input_error');
      document.getElementById('house_note').innerHTML = '';
    }
  }

  function validateComment() {
    if (!comment.value.match(commentPattern)) {
      comment.classList.add('input_error');
      document.getElementById('comment_note').innerHTML = '<br>Please provide details (min 20 characters)!';
    } else {
      comment.classList.remove('input_error');
      document.getElementById('comment_note').innerHTML = '';
    }
  }

  function submitData() {
    if (!alphaNumericName.test(userName.value)
    ||house.value=='Select'||!comment.value.match(commentPattern)) {
      return;
    } else {
      alert("Congratulate!");
      document.querySelector('.formWithValidation2').submit();
    }
  }

}

function disp(box2) {
  if (box2.style.display == 'none') {
    box2.style.display = 'block';
    box1.style.display = 'none';
  } else {
    box2.style.display = 'none';
  }
}
