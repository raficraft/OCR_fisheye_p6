function workshopComponent(){

    /** 
     * @param {JSON} dataJSON 
     * @param {string} method 
     * @returns {Array}
     */

    sortDataMedia(localStorage.getItem('sortDataMedia'))  // Réordonnancement par défaut du tableau avant usage
   
    
    this.createComponents = function(callback){      
        let makeComponent = []; 
        makeComponent.push(callback) //Check l'utilité du push et la forme de la données retourné [{}] || {} / {refactoring}
        return makeComponent
    }
}

/**
 * 
 * @param {Object} injectThis Element HTML commandé par la factory aux ateliers factory/workshopComponent.js
 * @param {HTMLElement} target 
 */
function renderComponent(injectThis,target){

 
    injectThis.map(function(injectThis){
        target.insertAdjacentHTML("beforeend",injectThis.elHTML)   
    })
  
     
}