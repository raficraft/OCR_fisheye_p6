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

        this.tabBtn = {
            trigger : document.querySelector('.customSelect--trigger'),
            popularity : document.querySelector('#customOption1'),
            date : document.querySelector('#customOption2'),
            title : document.querySelector('#customOption3')
        } 

       



        this.selectBody.addEventListener('click', (e) => { e.preventDefault(); this.openCustomSelect(this.selectBody) })

   /*     this.trigger.addEventListener('focus', (e)=>{            
            e.preventDefault();  e.stopPropagation();
            if(!this.selectBody.classList.contains('open')){

                this.openCustomSelect(this.selectBody)
            }
        })*/

  /*      
        this.lastOption.addEventListener('focus', (e)=>{ 

            e.preventDefault();  e.stopPropagation(); 
            
            if(!this.selectBody.classList.contains('open')){

                this.openCustomSelect(this.selectBody)
            }
        
        })

        this.lastOption.addEventListener('focusout',(e)=>{
            e.preventDefault();  e.stopPropagation();       

            const select = document.querySelector('.custom-select')         
            select.classList.remove('open');
            toggleAttribute(select,'aria-expanded','false','true')           
        
        })
*/
        for (const option of this.customOption) {
            option.addEventListener('click',  (e) => {  
                e.preventDefault();  e.stopPropagation(); 
                this.swapOption(option)  
                console.log('click dans le custom select')
            
            })
/*
            option.addEventListener('keydown',(e)=>{

                if(e.key === 13 || e.key === 32 ||
                   e.key === 'Enter' || e.key === ' '){
                    
                    console.log('keyDown dans le custom select : '+ e.key)  
                    e.preventDefault();  e.stopPropagation();                   
                    const target = e.target; 
                    sortMedia(target);
                    
                }
            })

            option.addEventListener('keydown',(e)=>{

                if(e.key === 9 || e.key === 'Tab'){
                    
                    console.log('tab option')
                    
                }
            })*/

        }

        this.createNavTab(this.tabBtn)

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


    createNavTab(tabBtn){

        console.log('tabBtn')
        
        for (const [key, value] of Object.entries(tabBtn)) {

            console.log(value)
            console.log(key)
            value.addEventListener('keydown',(e)=>{
             
                if(e.key === 'Tab'){ 
                    e.preventDefault()
                    e.stopPropagation()
                   switch(key){

                    case 'trigger':

                    if(!this.selectBody.classList.contains('open')){
                        this.openCustomSelect(this.selectBody)
                    }

                    if(!this.tabBtn.popularity.classList.contains('customHidden')){
                        console.log('caché')
                        this.tabBtn.popularity.focus()
                    }else{
                        console.log('pas caché')
                        this.tabBtn.date.focus()
                    }

                    /*
                    this.tabBtn.popularity.focus()
                    this.tabBtn.popularity.focus()*/
                    break

                    case 'popularity':
                        if(!this.tabBtn.title.classList.contains('customHidden')){
                            console.log('caché')
                            this.tabBtn.title.focus()
                        }else{
                            this.tabBtn.date.focus()
                            console.log('pas caché')
                        }
                    break

                    case 'date':

                        if(!this.tabBtn.title.classList.contains('customHidden')){
                            console.log('pas caché')
                            this.tabBtn.title.focus()
                        }else{
                            console.log('caché')
                        }
                    
                       
                    break

                    case 'title':
                        this.tabBtn.trigger.focus()
                    break
                    }

                    if(e.key === 'Enter' || e.key === ' '){
        console.log('on ferme')
                        this.closCustomSelect()
                     }
                              
                }              
            })
            
           
        } 



    }
    
   
}


new CustomSelect('.customSelect__wrapper')