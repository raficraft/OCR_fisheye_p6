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
 * 
 * @param {string} goTo  
 */

const redirectTo = (goTo)=>{
	document.location.href=goTo;
}

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

	console.log(typeof options);

	Object.keys(options).forEach(function(attr) {
	  el.setAttribute(attr, options[attr]);
	})
 }




 /**
 * Altere le tableau pour lui rajouter des entrées 
 * @param {objet} dataMedia // Contient tous les photographes
 */

const alterateMediaObject = (dataMedia) =>{

		//On ajoute des entrées au tableau passés en argument
		let thisData = getData.getIdentity()
		console.log(thisData);
		let tabName = thisData.name.split(' ');
		let name = tabName[0]
		

		//Repertoire ou ce trouve l'image
		let key ="dirMedia"
		let value = `img/${name}/` 
		
		
		//On insère une class dynamique,
		//Pour distingué chaque media et pouvoir les recadrer le cas échéant 
		let k1 = 'class'		
		let v1 = `media__${name}--`;		
		let limit = dataMedia.length

		// On ajoute Les nouvelles entrées au tableau NB : How tu use push Method ???
		for(var i = 0; i < limit; i++){
	
			dataMedia[i][key] = value
			dataMedia[i][k1] = v1+i
	
		}

console.log(dataMedia);

}


const redifineDistribution_StickerIdentity = () =>{
	
		// Considérant que l'on affiche seulement 6 fiches de photographe
		// maximum sur la page d'index et qu'au delà un systèmre de pagination
		// serait pertinent. On gère l'affichage en fonction du nombre de fiche
		// que l'on affiche, pour garder un rendu visuelle cohérent.

			let stickerEl = document.querySelectorAll('.sticker')

			let size = stickerEl.length
			

			if(multipleOfThree(size) === false || stickerEl.length === 1){

				document.querySelector('.main__wrapper--index').classList.toggle('orderSticker__mainCenter')

				for(let i = 0; i < size; i++){
					stickerEl[i].style.marginLeft  = '2rem'
					stickerEl[i].style.marginRight  = '2rem'
				}
			}



}

const sortDataMedia = (sortBy) => {


	switch (sortBy){

		case 'popularity':
			
			data.media.sort(function(a,b){
				return b.likes - a.likes
			})
			console.log(data.media);

		break;

		case 'date':

			data.media.sort(function(a,b){
				return new Date(b.date) - new Date(a.date);
			})
			console.log(data.media);

		break;


		case 'title':
		
			data.media.sort((a, b) => a.alt.localeCompare(b.alt, 'fr', {ignorePunctuation: true}));

		break;




	}
}

/**
 * Permet de masquer la scroll lors de
 * l'affichage d'une boite de dialog 
 * prenant toute la surface de l'écran
 */
const hiddenScrollBar= () => {
	let htmlElt = document.documentElement
    let bodyElt = document.body
    //Enlève la scrollbar lors de l'ouverture du carousel.
    htmlElt.scrollTop = 0;
    bodyElt.scrollTop = 0;
    bodyElt.style.overflow = "hidden"
}



const restoreScrollBar = () => {
	let bodyElt = document.body
        bodyElt.style.overflow = "scroll";
}


let deleteDialogForm = ()=>{
    console.log('delete')
    document.querySelector('.dialogBox').remove()
    restoreScrollBar()
}




