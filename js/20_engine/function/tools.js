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

const redirectionTo = (goTo)=>{
	document.location.href=goTo;
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


const redifineStyle_StickerIdentity = (target) =>{

	
		// Considérant que l'on affiche seulement 6 fiches de photographe
		// maximum sur la page d'index et qu'au delà un systèmre de pagination
		// serait pertinent. On gère l'affichage en fonction du nombre de fiche
		// que l'on affiche, pour garder un rendu visuelle cohérent.

		if(target.classList.contains('main__wrapper')){

			let stickerEl = document.querySelectorAll('.sticker')
			//NB : Réecrire la condition centre les éléments seulement si ne sont pas des multiple de 3
			if(checkURL.request.idURL === false){
				if(stickerEl.length <= 2 || stickerEl.length === 5 || stickerEl.length === 4){            
					
					document.querySelector('.main__wrapper--index').style.justifyContent  = 'center'
					for(let i = 0; i < stickerEl.length; i++){
						stickerEl[i].style.marginLeft  = '2rem'
						stickerEl[i].style.marginRight  = '2rem'
					}
				}
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

			data.media.sort(function(a,b){
				return a.alt - b.alt
			}).reverse()
			console.log(data.media);

		break;




	}
}



