'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const btnGirado = document.querySelector('#btn-chef-g');
  const dlgGirado = document.querySelector('#dlg-chef-g');
  const btnClose = document.querySelector('.btn--dialog-close');

  btnGirado.addEventListener('click', () => {
    dlgGirado.showModal();
  });

  btnClose.addEventListener('click', () => {
    dlgGirado.close();
  });

});
