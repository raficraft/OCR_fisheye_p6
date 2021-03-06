console.log('Gestionnaire des événements Chargés');
const itsEvent = document.querySelectorAll('[data-js]');
console.log(itsEvent);
const eventLimit = itsEvent.length
for (let i = 0 ; i < eventLimit; i++) {

    itsEvent[i].addEventListener('click',function(e){   

        console.log(e);
        console.log(e.target);

        // Gestion des événement filtrer avec l'attribut data-js présent sur l'élément clické
        // La valeur de l'attribut indique qu'elle action effectué
        e.preventDefault();

        console.log('click');

        if(e.target.dataset){

            
        
            let el = e.target;
            const target = e.target;
            const action = el.dataset.js;
            const params = el.dataset.params;

            console.log(action);
        // console.log(action);
            switch(action){

                case 'openFormContact' :

                    openFormContact()

                break;          

                case 'openCarousel':
                    console.log('openCarousel');
                   
                    openCarousel(target);
                
                break;

                /**/
                case 'sortMedia':

                    // on récupère la valeur de trie à passé à la fonction
                    console.log('On réorganise le tableau');                    
                    const sortBy_customSelect = target.dataset.value

                    sortDataMedia(sortBy_customSelect)
                    const elementToEmpty = document.querySelector('.photography')

                    elementToEmpty.querySelectorAll('*').forEach(n => n.remove());

                    showMedia()
                
                break;

            
            

            }

        }
    
    });

}


 

