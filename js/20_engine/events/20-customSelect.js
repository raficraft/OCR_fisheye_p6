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
        this.lastOption = document.getElementById('customOption3')



        this.selectBody.addEventListener('mousedown', (e) => { e.preventDefault(); this.openCustomSelect(this.selectBody) })

        this.trigger.addEventListener('focus', (e)=>{ this.openCustomSelect(this.selectBody);  })

        this.lastOption.addEventListener('focusout',(e)=>{
            
            const select = document.querySelector('.custom-select')         
            select.classList.remove('open');
            toggleAttribute(select,'aria-expanded','false','true')           
        
        })

        for (const option of this.customOption) {
            option.addEventListener('click',  (e) => {  
                e.preventDefault();  e.stopPropagation(); 
                this.swapOption(option)  
                console.log('click dans le custom select')
            
            })

            option.addEventListener('keydown',(e)=>{

                if(e.key === 13 || e.key === 32 || e.key === 'Enter' || e.key === ' '){
                    
                    console.log('keyDown dans le custom select : '+ e.key)  
                    e.preventDefault();  e.stopPropagation();                   
                    const target = e.target; 
                    sortMedia(target);
                    
                }
            })
        }



        window.addEventListener('click', (e) => { 
            this.closCustomSelect(e)

        
        });
    }



    swapOption(option){
        console.log(option);
        document.querySelector('.customHidden').classList.remove('customHidden');                
        if (!option.classList.contains('selected')) {
            option.parentNode.querySelector('.customOption.selected').classList.remove('selected');
            option.classList.add('selected','customHidden');
            option.closest('.custom-select').querySelector('.customSelect--trigger span').textContent = option.textContent;            
            localStorage.setItem('sortDataMedia' , option.dataset.value)

            console.log(this.trigger.textContent)

            if(localStorage.getItem('sortDataMedia') === 'title'){
                console.log('on change')
                this.lastOption = document.getElementById('customOption2')

                this.lastOption.addEventListener('focusout',(e)=>{
            
                    const select = document.querySelector('.custom-select')
                 
                        select.classList.remove('open');
                        toggleAttribute(select,'aria-expanded','false','true')  
                })

            }

            if(localStorage.getItem('sortDataMedia') === 'date'){
                console.log('on change')
                this.lastOption = document.getElementById('customOption3')

                this.lastOption.addEventListener('focusout',(e)=>{
            
                    const select = document.querySelector('.custom-select')
                 
                        select.classList.remove('open');
                        toggleAttribute(select,'aria-expanded','false','true')  
                })

            }
            //Spécifique à ce projet lors du filtre l'on réInject le carousel           
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