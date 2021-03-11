let sortMedia = (target)=>{


       // on récupère la valeur de trie à passé à la fonction                 
       const sortBy_customSelect = target.dataset.value

       sortDataMedia(sortBy_customSelect)
       const elementToEmpty = document.querySelector('.photography')
       elementToEmpty.querySelectorAll('*').forEach(n => n.remove());
       showMedia()

       const itsEvent = document.querySelectorAll('.sticker__media [data-js]');
       itsEvent.forEach((btn) => btn.addEventListener('click',function(e){   

              e.preventDefault();  e.stopPropagation();
            
              if(e.target.dataset){
      
                  let el = e.target;
                  const target = e.target;
                  const action = el.dataset.js;
      
                  console.log(action);
      
                  switch(action){      
      
                      case 'openCarousel': openCarousel(target); break;
      
                      case 'addLike':  addlike(target); break;  
      
                  }
              }    
          })
       )
}