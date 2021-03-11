const itsEvent = document.querySelectorAll('[data-js]');
const eventLimit = itsEvent.length
 // Gestion des événement filtrer avec l'attribut data-js présent sur l'élément clické
 // La valeur de l'attribut indique qu'elle action effectué

 itsEvent.forEach((btn) => btn.addEventListener('click',function(e){   

        e.preventDefault();  e.stopPropagation();
      
        if(e.target.dataset){

            let el = e.target;
            const target = e.target;
            const action = el.dataset.js;

            console.log(action);

            switch(action){

                case 'openFormContact' : openFormContact(); break;   
                
                case 'closeModal': closeModal(target); break;

                case 'submitModal': console.log('Soumettre le formulaire'); break;

                case 'openCarousel': openCarousel(target); break;

                case 'addLike':  addlike(target); break; 
                 
                case 'sortMedia': sortMedia(target);  break;


            }
        }    
    })
 )



 

