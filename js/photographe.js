

//On récupere les paramètres passer dans l'url (?id=number)
let get = window.location.search.substring(1).split('=');

paramRequest = get[0];
valueRequest = get[1];

//On transforme la valeur string en number
let id =parseInt(valueRequest)

console.log(id)

//Affiche un photographe
let el = document.getElementById("main__wrapper");
el.innerHTML = Photographer.showIdentity(data,id);

//affiche les media lié au photographe
console.log(Photographer.getMedia(data,id))
