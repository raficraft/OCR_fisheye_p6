class IndexEvent{

    constructor(){

     

        this.openBtn = document.querySelectorAll('[data-js="openFormContact"]')
        this.skipLink = document.querySelector('.redirect__link')


        this.openBtn.forEach(btn => {
            btn.addEventListener('click',(e) => {
              this.openFormContact()
            })
           
        });
       
        this.skipLink.addEventListener('focus', (e)=>{
            e.preventDefault(); e.stopPropagation();
            this.skipLink.classList.remove("sr__only")
        })
        this.skipLink.addEventListener('click', (e)=>{

            e.preventDefault()
            if(browserInfo.request.idURL === false){ 
                const firstMainEL = document.querySelectorAll('.sticker A')
                firstMainEL[0].focus()
                this.skipLink.classList.add('sr__only')
            }else{                
                const firstMainEL = document.querySelectorAll('.sticker__media A')
                firstMainEL[0].focus()
                this.skipLink.classList.add('sr__only')

            }

        })
    }

    openFormContact() {

    
   
        factory.injectModalForm();
        //On squizz le main avec un attribut Aria-hidden
        document.querySelector("#main").setAttribute("aria-hidden", true);
        document.querySelector("#dialog").setAttribute("aria-hidden", false);
        hiddenScrollBar();
        //on focus sur le premier champ de saisie
        document.querySelector("#lastname").focus();
        // On active les event click sur la modal*/
    }


    
}



const indexEvent = new IndexEvent()