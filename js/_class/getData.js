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