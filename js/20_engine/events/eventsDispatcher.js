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

                case 'openFormContact' :

                    //On passe le main avec un attribut Aria-hidden
                    document.querySelector('#main').setAttribute('aria-hidden', true);
                    document.querySelector('#dialog').setAttribute('aria-hidden', false);
                    hiddenScrollBar()
                    //on focus sur le premier champ de saisie
                    document.querySelector('#firstname').focus()

                break;   
                
                case 'closeModal':
                    restoreScrollBar()
                    document.querySelector('#main').setAttribute('aria-hidden', false);
                    document.querySelector('#dialog').setAttribute('aria-hidden', true);

                break;

                case 'submitModal':

                    console.log('Soumettre le formulaire');

                break;

                case 'openCarousel':
                   
                    let item = parseInt(target.dataset.item);                     

                    document.querySelector('.slider').setAttribute('aria-hidden', false);                    
                    document.querySelector('#main').setAttribute('aria-hidden', true);
                    document.querySelector('.carousel__prev').focus()
                    hiddenScrollBar()

                    new Carousel(document.querySelector('.carousel__container'),{
                        slidesToScroll : 1,
                        slidesVisible : 1,
                        currentItem : item,
                        loog : true
                    })
                    
                break;

                /**/
                case 'sortMedia':

                    // on récupère la valeur de trie à passé à la fonction                 
                    const sortBy_customSelect = target.dataset.value

                    sortDataMedia(sortBy_customSelect)
                    const elementToEmpty = document.querySelector('.photography')

                    elementToEmpty.querySelectorAll('*').forEach(n => n.remove());

                    showMedia()
                
                break;

                case 'addLike':
                // get innerText

                    let like = parseInt(target.textContent)
                    let newCount = like + 1
                    target.innerHTML = `${newCount}<i class="fas fa-heart fontIcon"></i>`
                    target.removeAttribute('data-js')

                    let allLikeElement = document.querySelectorAll('.sticker__media--like')  
                    let limit = allLikeElement.length
                  

                    let sumLike = 0
                    for (let i = 0; i<limit; i++){
                        sumLike = sumLike + parseInt(allLikeElement[i].textContent)
                    }


                    let sumLikeElement = document.querySelector('.sumLike')
                    sumLikeElement.innerHTML = `${sumLike}<i class="fas fa-heart fontIcon"></i>`
                
                
                break;    

            }

        }
    
    });

}



 

