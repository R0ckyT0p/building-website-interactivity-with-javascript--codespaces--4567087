"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const myForm = document.querySelector('#frm-signup');
    const passwords = document.querySelectorAll('.field--password');
    const msgRegion = document.querySelector('#messages');
    const msgError = document.querySelector('.dialog--msg-error');
    const msgSuccess = document.querySelector('.dialog--msg-success');

    let delayTimer;

    // Step 1: Validate that the passwords match when the form is submitted.
    myForm.addEventListener('submit', evt => {
        // For our purposes, this form doesn't need to go anywhere
        evt.preventDefault();

        if (passwords[0].value !== passwords[1].value) {
            msgSuccess.close();
            msgError.textContent = 'Passwords do not match.';
            msgError.show();
        } else {
            msgError.close();
            const delay = parseInt(msgSuccess.dataset.closeDelay, 10);
            msgSuccess.textContent = 'Passwords match!';
            msgSuccess.show();
            delayTimer = setTimeout(() => {
                msgSuccess.close();
            }, delay * 1000);
        }
    });

    // Step 2: Wire up toggling password visibility
    const btnReveal = document.getElementById('reveal-password');

    btnReveal.addEventListener('click', evt => {
        evt.preventDefault();

        passwords.forEach(pwField => {
            if (pwField.type === 'password') {
                pwField.type = 'text';
                btnReveal.innerText = btnReveal.dataset.labelHide;
            } else {
                pwField.type = 'password';
                btnReveal.innerText = btnReveal.dataset.labelShow;
            }
        });
    });
});
