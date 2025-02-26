"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector('#btn-submit');
  const btnReveal = document.querySelector('#reveal-pwd');
  const fldPwd = document.querySelector('#txt-password');
  const fldPwdConfirm = document.querySelector('#txt-password-confirm');

  // Step 1: Validate that the passwords match when the form is submitted.
  btnSubmit.addEventListener('click', (evt) => {
    if (fldPwd.value !== fldPwdConfirm.value) {
      alert('The passwords do not match.');
      evt.preventDefault();
    }
  });

  // Step 2: Wire up toggling password visibility
  btnReveal.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (fldPwd.type === 'password') {
      fldPwd.type = 'text';
      btnReveal.innerText = btnReveal.dataset.labelHide;
    } else {
      fldPwd.type = 'password';
      btnReveal.innerText = btnReveal.dataset.labelShow;
    }
    fldPwdConfirm.type = fldPwd.type;
  });
  
});