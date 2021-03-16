function workshopComponent(){

    /** 
     * @param {JSON} dataJSON 
     * @param {string} method 
     * @returns {Array}
     */

    sortDataMedia(localStorage.getItem('sortDataMedia'))  // Réordonnancement par défaut du tableau avant usage
   
    
    this.createComponents = function(callback){
      
        let makeComponent = []; 
        makeComponent = callback

        console.log(makeComponent);

        return makeComponent
    }
}

/**
 * 
 * @param {Object} injectThis Element HTML commandé par la factory au usine factory/workshop.js
 * @param {HTMLElement} target 
 */
function renderComponent(injectThis,target){

    if(!injectThis.length){
         target.insertAdjacentHTML("beforeend",injectThis.elHTML)

    }else{
        injectThis.map(function(injectThis){
          target.insertAdjacentHTML("beforeend",injectThis.elHTML) 
  
        })
   }
     
}