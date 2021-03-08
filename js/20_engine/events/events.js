console.log('Gestionnaire des événements Chargés');
const itsEvent = document.querySelectorAll('[data-js]');
console.log(itsEvent);
const eventLimit = itsEvent.length
for (let i = 0 ; i < eventLimit; i++) {

    itsEvent[i].addEventListener('click',function(e){   

        e.preventDefault();        
        e.stopPropagation()
        console.log(e);
        console.log(e.target);
        console.log('click');

        // Gestion des événement filtrer avec l'attribut data-js présent sur l'élément clické
        // La valeur de l'attribut indique qu'elle action effectué
      
        if(e.target.dataset){
            
        
            let el = e.target;
            const target = e.target;
            const action = el.dataset.js;
            const params = el.dataset.params;

            console.log(action);
        // console.log(action);
            switch(action){

                case 'openFormContact' :

                    //On passe le main avec un attribut Aria-hidden
                    let webSiteHidden = document.querySelector('#main')
                    let showDialogBox = document.querySelector('#dialog')
                    webSiteHidden.setAttribute('aria-hidden', 'true');
                    //On affiche la boite de dialog
                    showDialogBox.setAttribute('aria-hidden', false);
                    //on focus sur le premier champ de saisie
                    let inputFirst = document.querySelector('#firstname')
                    inputFirst.focus()



                break;   
                
                case 'closeModal':


                    let webSiteShow = document.querySelector('#main')
                    let dialogBoxClose = document.querySelector('#dialog')
                    webSiteShow.setAttribute('aria-hidden', 'false');
                    //On affiche la boite de dialog
                    dialogBoxClose.setAttribute('aria-hidden', true);

                break;

                case 'submitModal':

                    console.log('Soumettre le formulaire');

                break;

                case 'openCarousel':
                   /*
                    let item = parseInt(target.dataset.item); 

                    new Carousel(document.querySelector('.carousel__container'),{
                        slidesToScroll : 1,
                        slidesVisible : 1,
                        currentItem : 0,
                        loog : true
                    })
                    */
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

                    console.log(sumLike);

                    let sumLikeElement = document.querySelector('.sumLike')
                    sumLikeElement.innerHTML = `${sumLike}<i class="fas fa-heart fontIcon"></i>`
                
                
                break;    
                
                
                case 'closeContact ': 

                    console.log('la putain de sa mère')

                break
            
            

            }

        }
    
    });

}


 

