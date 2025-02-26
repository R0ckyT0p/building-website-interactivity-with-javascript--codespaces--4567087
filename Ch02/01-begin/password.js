"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const btnReveal = document.querySelector('#reveal-password');
    const fldPassword = document.querySelector('#txt-password');
    const fldPasswordSync = document.querySelector('#txt-password-reveal');

    const fldPasswordInitialDisplay = getComputedStyle(fldPassword).display;

    btnReveal.addEventListener('click', (evt) => {
      evt.preventDefault();

      const fldPasswordCurrentDisplay = getComputedStyle(fldPassword).display;

      if (fldPasswordCurrentDisplay !== fldPasswordInitialDisplay) {
        fldPassword.style.display = fldPasswordInitialDisplay;
        fldPasswordSync.style.display = "none";
        btnReveal.innerText = btnReveal.dataset.labelShow;
      }else {
        fldPassword.style.display = "none";
        fldPasswordSync.style.display = fldPasswordInitialDisplay;
        btnReveal.innerText = btnReveal.dataset.labelHide;
      }
      /* This is the First apporach to changing the password field type */
      // if (fldPassword.type === 'text') {
      //   fldPassword.type = 'password';
      //   btnReveal.innerText = btnReveal.dataset.labelShow;
      // }
      // else if (fldPassword.type === 'password') {
      //   fldPassword.type = 'text';
      //   btnReveal.innerText = btnReveal.dataset.labelHide;
      // }
      // else {
      //   console.error('Unknown password field type');
      // }

    });

    fldPassword.addEventListener('input', (evt) => {
      fldPasswordSync.value = fldPassword.value;
    });

    fldPasswordSync.addEventListener('input', (evt) => {
      fldPassword.value = fldPasswordSync.value;
    });
});
