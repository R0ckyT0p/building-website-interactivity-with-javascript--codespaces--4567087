'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const inHotelSection = document.querySelector('#inhotel');

  inHotelSection.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.classList.contains('btn--dialog-open')) {
      evt.preventDefault();

      let myDlg = target.parentNode.querySelector('.dialog--chef');

      if (!myDlg) {
        myDlg = target.parentNode.parentNode.querySelector('.dialog--chef');
      } 
      if (myDlg) {
        myDlg.showModal();
      }
    }else if (target.classList.contains('btn--dialog-close')) {
      evt.preventDefault();

      const myDlg = target.closest('dialog');

      if ('close' in myDlg) {
        myDlg.close();
      }
    }
  });
});
