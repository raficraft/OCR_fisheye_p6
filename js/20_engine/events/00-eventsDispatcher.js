 class EventsDispatcher{

    constructor(dataAttibute){
        this.events = document.querySelectorAll(dataAttibute);
        this.events.forEach((btn) => btn.addEventListener('click',(e)=>{ this.eventClick(e)}  ))       
    }

    eventClick(e){
        
      
        if(e.target.dataset){

            const el = e.target;
            const target = e.target;
            const action = el.dataset.js;
            console.log(action)
            if(action !== 'submitModal'){
                e.preventDefault();  e.stopPropagation();
                switch(action){               

                    case 'openFormContact' : openFormContact(); break;   
                    
                    case 'closeModal':  closeModal(target); break;
                

                    case 'openCarousel': openCarousel(target); break;

                    case 'sortMedia': sortMedia(target);  break;

                    case 'addLike':  addlike(target); break;  

                }
            }else{

               submitModal()
            }
        } 
    }
 }

new EventsDispatcher('[data-js]')

