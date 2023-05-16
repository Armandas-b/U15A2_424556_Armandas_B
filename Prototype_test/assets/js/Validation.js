function disableField() {
  const myForm = document.getElementById('myForm');
  const submitBtn = document.getElementById('submitButton');

  if (myForm.checkValidity()) {
    submitBtn.disabled = false;
      console.log('btn a')
  } else {
    submitBtn.disabled = true;
      console.log('btn d')
  }
}

disableField();

const inputs = document.getElementsByTagName('input');
for (let input of inputs) {
  input.addEventListener('input', disableField);
}
