function componentsFactory(){

    /**
     * 
     * @param {JSON} dataJSON 
     * @param {string} method 
     * @returns {Array}
     */

    sortDataMedia('popularity') 
    this.createComponents = function(dataJSON,method){

        let makeComponent = []; 
        let i=0;
        
        switch(method){

            case 'identities':
                //On boucle sur les identités
                dataJSON.map(function(identitys){  
                    makeComponent[i] = new createSticker(identitys)
                    i++                 
                })
            break;

            case 'oneIdentity' :           
                makeComponent = new createSticker(dataJSON)
            break;


            case 'makeMedia' : 

                alterateMediaObject(dataJSON) //NB ecrire la doc dans tools

                dataJSON.map(function(media){  

                if(media.image){
                //On construit l'élément HTML pour les images
                    makeComponent[i] = new createImage(media,i) //NB verifier l'intérêt de passer l'increment à l'atelier 
                    i++
                }

                if(media.video){
                //On construit l'élément HTML pour les video
                    makeComponent[i] = new createVideo(media,i)
                    i++
                }
          
              })      
                
            break;


            case 'makeCounter' : 

                makeComponent = new createCounter(dataJSON)

            break;
        }

        return makeComponent
    }

}

//Affiche le contenue produit par de l'usine
function renderComponent(showThis,target,method){

    switch(method){

        case 'identity':

            //Dans le cas ou le tableau ne contient qu'une seul entrée NB : 1 entrée mais longueur inexistante !?
            if(!showThis.length){

                target.insertAdjacentHTML("beforeend",showThis.elHTML) 

            }else{

                showThis.map(function(thisIdentity){
                    target.insertAdjacentHTML("beforeend",thisIdentity.elHTML) 
                })
            }

          

        break;

        case 'media' :

            showThis.map(function(media){  
    
                target.insertAdjacentHTML("beforeend",media.elHTML)
                
            })

        break;

        case 'counter' :
             target.insertAdjacentHTML("beforeend",showThis.elHTML)              
      
        break;

    } 
    
  }
