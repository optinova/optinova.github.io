let indexOpen = 0;

let btnTab = document.querySelectorAll('.toolbar-tabs--tab');
let contentTab = document.querySelectorAll('.layout');

function tabCurrent(thisTab) {
    let idCurrent = thisTab.dataset.tab;

    for (let i = 0; i < btnTab.length; i++) {
        btnTab[i].classList.remove('current');
    }
    thisTab.classList.add('current');

    for (let i = 0; i < contentTab.length; i++) {
      if (idCurrent === contentTab[i].id) {
        contentTab[i].classList.add('current');
      } else {
        contentTab[i].classList.remove('current');
      }
    }
}

for (let i = 0, len = btnTab.length; i < len; i++) {
  btnTab[i].onclick = function() {
   tabCurrent(this);
  }
}

tabCurrent(btnTab[indexOpen]);
