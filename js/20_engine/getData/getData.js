class getData {
        
      /** 
       * @param {JSON} data  Tableau json contenant les photographes et les photos
       */

        constructor(data,idURL = browserInfo.request.idURL) {

          this.data = data;
          this.idURL = idURL;

          console.log(this.idURL);

        }
      


        /**
         *  Recupère tous les profils des photographes .
         */
        static getIdentities(){
          return data.photographers
        }



        /**
         * Recupère tous les profils des photographe pour la page index.
         * @param {string} sortValue valeur de trie (travel,sports,events...)
         */
        static getIdentitiesByTag(sortValue){

            let x = 0;
            // Données de sorties
            let sortIdentity =[]

            let identities = getData.getIdentities() //toutes les identité
            let identitysLength = identities.length;
            
            for(let i=0;i<identitysLength;i++){

              let thisIdentity = identities[i]
            
            /* Si la longueur du résultat de la requête est supérieur à zero
              On stock l'identité concerné */
          
            if(thisIdentity.tags.filter(el => el === sortValue).length > 0){      
                sortIdentity[x] = thisIdentity;
                x++
              }
            }

            //redirection si le tableau de trie ne contient aucune valeur

            if(Object.size(sortIdentity) === 0){
              redirectTo('404.html')
            }
          
            return sortIdentity;
          
        }


        /**
         * Recupère le profil du photographe selon l'ID passer dans l'URL
         */
        static getIdentity() {


            let thisData = data.photographers.find(el => el.id === browserInfo.request.idURL)
            
            if(Object.size(thisData) === 0){
              redirectTo('404.html')
            }
            
            return thisData

        }

        /**
         * Récupère les photos du photographe selon l'ID passer dans l'url
         */      
        static getMediaByIdentity(){

          console.log('getMedia');
         
            let thisMedia =  data.media.filter(el => el.photographerId === browserInfo.request.idURL)          
            return thisMedia
        }


        static getCountLike(){

          let mediasByIdentity_JSON = getData.getMediaByIdentity(data)
          let identity_JSON = getData.getIdentity(data)
  
          let countLike = 0;
          let thisPrice = identity_JSON.price
  
          mediasByIdentity_JSON.map(function(data){ 
              countLike += data.likes
          })
  
          let thisData = { countLike : countLike , price : thisPrice}
  
          return thisData


        }

}



console.log(window.innerHeight)