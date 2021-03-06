class getData {
        
      /** 
       * @param {JSON} data  Tableau json contenant les photographes et les photos
       */

        constructor(data,idURL = checkURL.request.idURL) {

          this.data = data;
          this.idURL = idURL;

          console.log(this.idURL);

        }
      


        /**
         *  Recupère tous les profils des photographes .
         */
        static getAllIdentity(){
          return data.photographers
        }



        /**
         * Recupère tous les profils des photographe pour la page index.
         * @param {string} sortValue valeur de trie (travel,sports,events...)
         */
        static getAllIdentityByTag(sortValue){

          let x = 0;
          // Données de sorties
          let sortIdentity =[]

          let allIdentity = getData.getAllIdentity() //toutes les identité
          let identitysLength = allIdentity.length;
          
          for(let i=0;i<identitysLength;i++){

            let thisIdentity = allIdentity[i]
          
          /* Si la longueur du résultat de la requête est supérieur à zero
            On stock l'identité concerné */
        
          if(thisIdentity.tags.filter(el => el === sortValue).length > 0){      
              sortIdentity[x] = thisIdentity;
              x++
            }
          }

          console.log(sortIdentity.length);
          //redirection si le tableau de trie ne contient aucune valeur
          if(sortIdentity.length === 0){
            console.error('on redirige');
            document.location.href="404.html";
          }
        
          return sortIdentity;
          
        }


        /**
         * Recupère le profil du photographe selon l'ID passer dans l'URL
         */
        static getIdentity() {
            let thisData = data.photographers.find(el => el.id === checkURL.request.idURL)
            return thisData
        }

        /**
         * Récupère les photos du photographe selon l'ID passer dans l'url
         */
      
        static getMediaByIdentity(){
            let thisMedia =  data.media.filter(el => el.photographerId === checkURL.request.idURL)
            return thisMedia
        }

}



