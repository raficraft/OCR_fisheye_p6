
function componentsFactory(){

    /** 
     * @param {JSON} dataJSON 
     * @param {string} method 
     * @returns {Array}
     */

   // sortDataMedia('popularity')  // Réordonnancement du tableau avant usage
    
    this.createComponents = function(method,dataJSON){

        let makeComponent = []; 
        let inc=0;
        
        switch(method){

            case 'identities':
                
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
 */


function renderComponent(showThis,target){

    if(!showThis.length){

        target.insertAdjacentHTML("beforeend",showThis.elHTML) 

    }else{

        showThis.map(function(showThis){
            target.insertAdjacentHTML("beforeend",showThis.elHTML) 

        })
    }
}