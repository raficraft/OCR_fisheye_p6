class getData {

  //Déclaration d'une valeur par défaut pour la page index
  idURL= false;

  constructor(data) {
    this.data = data;
    this.idURL = idURL;
  }
  
  //Recupère tous les profils des photographe pour la page index.
  static getAllIdentity(){
    return data.photographers
  }

  //Recupère tous les profils des photographe pour la page index.
  static getAllIdentityByTag(sortValue){

    let x = 0;
    // Données de sorties
    let sortIdentity =[]

    let allIdentity = getData.getAllIdentity() //toutes les identité
    let identitysLength = allIdentity.length;
    
    for(let i=0;i<identitysLength;i++){

      let thisIdentity = allIdentity[i]
    
    // Si la longueur du résultat la requête est supérieur à zero
    // On stock l'identité concerné
    if(thisIdentity.tags.filter(el => el=== sortValue).length > 0){
        sortIdentity[x] = thisIdentity;
        x++
      }

    }
   
    return sortIdentity;
    
  }

  //Recupère le profil du photographe selon l'ID passer dans l'URL
  static getIdentity() {
      let thisData = data.photographers.find(el => el.id === idURL)
      return thisData
  }
  //Récupère les photo du photographe selon l'ID passer dans l'url
  static getMedia(){
      let thisMedia =  data.media.filter(el => el.photographerId === idURL)
      return thisMedia
  }

}

console.log(getData.getAllIdentity());
console.log(getData.getAllIdentityByTag());


