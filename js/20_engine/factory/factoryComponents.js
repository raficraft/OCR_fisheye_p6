function componentsFactory(){

    /** 
     * @param {JSON} dataJSON 
     * @param {string} method 
     * @returns {Array}
     */

    sortDataMedia('popularity')  // Réordonnancement du tableau avant usage
    
    this.createComponents = function(method,dataJSON){

        let makeComponent = []; 
        let inc=0;
        
        switch(method){

            case 'identities':
                
                //On boucle sur les identités
                dataJSON.map(function(identitys){  
                    makeComponent[inc] = new createSticker(identitys)
                    inc++                 
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
                    makeComponent[inc] = new createImage(media,inc) 
                    inc++
                }

                if(media.video){
                //On construit l'élément HTML pour les video
                    makeComponent[inc] = new createVideo(media,inc)
                    inc++
                }          
              })      
                
            break;

            case 'makeCounter' : 
                makeComponent = new createCounter(dataJSON)
            break;

            case 'modalForm' : 
                makeComponent = new createModalForm(dataJSON)
            break;
            case 'carousel' : 
                makeComponent = new createCarousel(dataJSON)
            break;
        }

        return makeComponent
    }

}


/**
 * 
 * @param {Object} showThis Element HTML commandé par la factory au usine factory/workshop.js
 * @param {HTMLElement} target 
 * @param {string} method 
 */
function renderComponent(showThis,target,method){

    console.error('affichage via render Component '+method); 
    console.error(typeof showThis); 
    console.error('Longueur de l\'élément à afficher : '+showThis.length); 
    console.error('Size de l\'élément à afficher : '+Object.isFrozen(showThis)); 



    switch(method){

        case 'identity':



            //Dans le cas ou le tableau ne contient qu'une seul entrée NB : 1 entrée mais longueur inexistante !?
            if(!showThis.length){

                target.insertAdjacentHTML("beforeend",showThis.elHTML) 

            }else{

                showThis.map(function(showThis){
                    target.insertAdjacentHTML("beforeend",showThis.elHTML) 
                })
            }

          

        break;

        case 'media' :

            showThis.map(function(showThis){  
    
                target.insertAdjacentHTML("beforeend",showThis.elHTML)
                
            })

        break;

        case 'counter' :
             target.insertAdjacentHTML("beforeend",showThis.elHTML)              
      
        break;


        case 'modalForm' :
            target.insertAdjacentHTML("beforeend",showThis.elHTML)  
        
        break;


        case 'carousel' :
            target.insertAdjacentHTML("beforeend",showThis.elHTML)  
        
        break;

    } 
    
  }
