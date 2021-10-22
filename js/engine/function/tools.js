/**
 * Met le premier caractère d'une chaine en majuscule
 * @param {string}
 */

const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Obtiens la dimension d'un objet
 * @param {objet} obj
 */
Object.size = (obj) => {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

/**
 * Verifie que le valeur passé en argument est un multiple de 2
 * @param {number} value
 */

const isEven = (value) => {
  if (value % 2 == 0) return true;
  else return false;
};

/**
 * Verifie que le valeur passé en argument est un multiple de 2
 * @param {number} value
 */

const multipleOfThree = (value) => {
  if (value % 3 == 0) return true;
  else return false;
};

/**
 *
 * @param {string} goTo
 */

const redirectTo = (goTo) => {
  document.location.href = goTo;
};

/**
 * Permute un élément avec le premier enfant du parent
 * Utile pour le Custom Select
 * NB : Possibilité de l'amérioler:
 *  -Permutté deux éléments qu'elle que soit leur position
 *  -Permuté les éléments adjacents {previousSibling || nextSibling}
 * @param {HTMLElement} elem
 */

function swapDiv(elem) {
  elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
}

/**
 * Permet de modofier plusieurs attribut en une seul requête
 * @param {HTMLElement} el //Element ciblé
 * @param {objet} options  // Collections d'attributs à appliqué
 */

const setAttributes = (el, options) => {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
};

/**
 * Altere le tableau pour lui rajouter des entrées
 * @param {objet} dataMedia // Contient tous les photographes
 */

/**
 * Permet de masquer la scroll lors de
 * l'affichage d'une boite de dialog
 * prenant toute la surface de l'écran
 */
const hiddenScrollBar = () => {
  let htmlElt = document.documentElement;
  let bodyElt = document.body;
  //Enlève la scrollbar lors de l'ouverture du carousel.
  htmlElt.scrollTop = 0;
  bodyElt.scrollTop = 0;
  bodyElt.style.overflow = "hidden";
};

const restoreScrollBar = () => {
  let bodyElt = document.body;
  bodyElt.style.overflow = "";
};

const toggleAttribute = (element, attributes, oldAttr, newAttr) => {
  if (element.getAttribute(attributes) === oldAttr) {
    element.setAttribute(attributes, newAttr);
  } else if (element.getAttribute(attributes) === newAttr) {
    element.setAttribute(attributes, oldAttr);
  }
};
