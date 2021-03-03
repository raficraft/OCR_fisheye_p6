

/**
 * Met le premier caractère d'une chaine en majuscule
 * @param {string}
 */

const ucfirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



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

const isEven = value => {
	if (value%2 == 0)
		return true;
	else
		return false;
}

/**
 * Verifie que le valeur passé en argument est un multiple de 2
 * @param {number} value
 */

const multipleOfThree = value => {
	if (value%3 == 0)
		return true;
	else
		return false;
}

/**
 *  Supprime l'élément HMTL dans le Dom
 *  @param {HTMLElement} target
 */


/**
 * 
 * @param {string} goTo  
 */

const redirectionTo = (goTo)=>{
	document.location.href=goTo;
  }

