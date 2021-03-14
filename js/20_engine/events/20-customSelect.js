/**
 *  Source Externe [https://andrejgajdos.com/custom-select-dropdown/]
 *  Custom_select adapté au besoin du projet.
 * 
 */

 class CustomSelect{

    constructor(element){

        this.el = document.querySelector(element)        
        this.customOption =  document.querySelectorAll(".customOption")
        this.selectBody = document.querySelector('.custom-select');
        this.trigger = document.querySelector('.customSelect--trigger');

        this.el.addEventListener('click', () => { this.openCustomSelect(this.selectBody) })

        
        for (const option of this.customOption) {
            option.addEventListener('click',  () => {   this.swapOption(option)})
        }
        
        window.addEventListener('click', (e) => { this.clickDoMAndClose(e)});
        
        this.trigger.addEventListener('focus', (e)=>{ this.openCustomSelect(this.selectBody);  })
     

    }



    swapOption(option){
        console.log('swap');
        document.querySelector('.customHidden').classList.remove('customHidden');                
        if (!option.classList.contains('selected')) {
            option.parentNode.querySelector('.customOption.selected').classList.remove('selected');
            option.classList.add('selected','customHidden');
            option.closest('.custom-select').querySelector('.customSelect--trigger span').textContent = option.textContent;
            sortDataMedia(localStorage.setItem('sortDataMedia', option.textContent))

            //Spécifique à ce projet lors du filtre l'on réaffiche le carousel           
            showCarousel()
            //On ferme le customSelect et on pointe sur la première image
            this.closCustomSelect()
            let firstMedia = document.querySelector('.flexImg[data-item="0"]')
            firstMedia.focus()
        

            
        }
    }

    openCustomSelect(el){       
        el.classList.toggle('open');
        toggleAttribute(el,'aria-expanded','false','true') 
    }

    clickDoMAndClose(e){
        if (!this.selectBody.contains(e.target)) {
            this.selectBody.classList.remove('open');
            toggleAttribute(this.selectBody,'aria-expanded','false','true')
        }
    }

    closCustomSelect(){
        const select = document.querySelector('.custom-select')        
        select.classList.remove('open');
        toggleAttribute(select,'aria-expanded','false','true')
        
    }

    
   
}




