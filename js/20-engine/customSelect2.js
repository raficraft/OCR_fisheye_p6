
console.error('customSelect');


var x, i, j, l, ll, selElmnt, a, b, c;
/*Récupère tous les éléments avec la classe "custom-select"*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*Pour chaque élément, crée une nouvelle DIV qui agira comme l'élément
  selectionné */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected switchBorder customSelect--padding");
  a.innerHTML = `<DIV>${selElmnt.options[selElmnt.selectedIndex].innerHTML}</DIV>`;
  console.log(a);
  console.error(a.innerHTML);
  x[i].appendChild(a);
  /*Pour chaque élément, crée une nouvelle DIV qui contient la liste d'option*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*Pour chaque option de l'élément de sélection d'origine,
    crée une nouvelle DIV qui agira comme l'option d'origine:*/
    c = document.createElement("DIV");
    //le fait de rajouter une div ne switch plus le contenue texte de l'élément selectionné
    c.innerHTML = `<div>${selElmnt.options[j].innerHTML}</div>`;


    
    c.addEventListener("click", function(e) {
        /*Lorsque un élément est cliqué, mets à jour la boite d'origine
        et l'élément sélectionné:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        console.log(s.value);//le pseudo label popularité premiere otpions
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected customSelect--padding");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*Ouvre le select cible et ferme toutes les autres:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");     
      this.classList.toggle('switchBorder');
      let cibleBorder = document.querySelector('.select-selected > div')
      cibleBorder.classList.toggle('customSelect-border');
    });
}
function closeAllSelect(elmnt) {
  /*Ferme toutes les boites de selection sauf l'actuelle:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*Si l'utilisateur clique en dehors de la zone du select, cela le ferme*/
document.addEventListener("click", closeAllSelect);