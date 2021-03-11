 class EventsDispatcher{

    constructor(dataAttibute){
        this.events = document.querySelectorAll(dataAttibute);
        this.events.forEach((btn) => btn.addEventListener('click',(e)=>{ this.listen(e)}  ))       
    }

    listen(e){
        e.preventDefault();  e.stopPropagation();
      
        if(e.target.dataset){

            const el = e.target;
            const target = e.target;
            const action = el.dataset.js;

            console.log(action);

            console.log(action)

            switch(action){

                case 'openFormContact' : openFormContact(); break;   
                
                case 'closeModal': closeModal(target); break;

                case 'submitModal': console.log('Soumettre le formulaire'); break;

                case 'openCarousel': openCarousel(target); break;

                case 'sortMedia': console.log(localStorage.getItem('sortDataMedia')); sortMedia(target);  break;

                case 'addLike':  addlike(target); break;  

            }
        } 
    }
 }

new EventsDispatcher('[data-js]')


 

/***
 * 
 *   
        this.trigger.addEventListener('focus', (e)=>{
            if(this.click === false){
             this.openCustomSelect();
            } 
        })
        


        this.lastOption.addEventListener('focusout',(e)=>{; this.closCustomSelect(e); })
*/