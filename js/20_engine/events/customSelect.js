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

        this.el.addEventListener('click', () => { this.openCustomSelect(this.selectBody) })
        for (const option of this.customOption) {
            option.addEventListener('click',  () => {   this.swapOption(option)})
        }
        window.addEventListener('click', (e) => { this.closCustomSelect(e)});
    }



    swapOption(option){
        console.log(option);
        document.querySelector('.customHidden').classList.remove('customHidden');                
        if (!option.classList.contains('selected')) {
            option.parentNode.querySelector('.customOption.selected').classList.remove('selected');
            option.classList.add('selected','customHidden');
            option.closest('.custom-select').querySelector('.customSelect--trigger span').textContent = option.textContent;
            sortDataMedia(localStorage.setItem('sortDataMedia', option.textContent))

            //Spécifique à ce projet
           
            showCarousel()
        }
    }

    openCustomSelect(el){       
        el.classList.toggle('open');
        toggleAttribute(el,'aria-expanded','false','true') 
    }

    closCustomSelect(e){
        const select = document.querySelector('.custom-select')
        if (!select.contains(e.target)) {
            select.classList.remove('open');
            toggleAttribute(select,'aria-expanded','false','true')
        }
    }

    
   
}


new CustomSelect('.customSelect__wrapper')
      
