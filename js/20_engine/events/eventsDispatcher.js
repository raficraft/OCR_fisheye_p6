const itsEvent = document.querySelectorAll('[data-js]');
const eventLimit = itsEvent.length

for (let i = 0 ; i < eventLimit; i++) {

    itsEvent[i].addEventListener('click',function(e){   

        e.preventDefault();        
        e.stopPropagation() 

        // Gestion des événement filtrer avec l'attribut data-js présent sur l'élément clické
        // La valeur de l'attribut indique qu'elle action effectué
      
        if(e.target.dataset){

            let el = e.target;
            const target = e.target;
            const action = el.dataset.js;
            const params = el.dataset.params;

            console.log(action);

            switch(action){

                case 'openFormContact' : openFormContact(); break;   
                
                case 'closeModal': closeModal(); break;

                case 'submitModal': console.log('Soumettre le formulaire'); break;

                case 'openCarousel': openCarousel(target); break;

                case 'sortMedia': sortMedia(target);  break;

                case 'addLike':  addlike(target); break;  

            }

        }
    
    });

}



 

