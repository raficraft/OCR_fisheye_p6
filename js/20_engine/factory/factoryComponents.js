function componentsFactory(){

    this.createComponents = function(dataJSON,method){

        let makeComponent = []; 
        let i=0;
        
        switch(method){

            case 'allIdentities':
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
                    makeComponent[i] = new createImage(media,i); //NB verifier l'intérêt de passer l'increment à l'atelier 
                    i++
                }

                if(media.video){
                //On construit l'élément HTML pour les video
                    makeComponent[i] = new createVideo(media,i);
                    i++
                }
          
              })      
                
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

            redifineStyle_StickerIdentity(target) //voir function/tools.js NB : écrire la doc dans tools.js


        break;

        case 'media' :

            showThis.map(function(media){  
    
                target.insertAdjacentHTML("beforeend",media.elHTML)
                
            })

        break;

    } 
    
  }
