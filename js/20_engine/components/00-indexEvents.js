class IndexEvent{

    constructor(){


        this.openBtn = document.querySelectorAll('[data-js="openFormContact"]')
        this.skipLink = document.querySelector('.redirect__link')

        console.log(this.skipLink);

        this.openBtn.forEach(btn => {
            console.log('click');
            btn.addEventListener('click',(e) => {
              this.openFormContact()
            })
           
        });
       
        this.skipLink.addEventListener('focus', (e)=>{
            console.log('lol');
            e.preventDefault(); e.stopPropagation();
            this.skipLink.classList.remove("sr__only")
        })
        this.skipLink.addEventListener('click', (e)=>{

            //On focus sur le premier sticker
        })
    }

    openFormContact() {
        factory.injectModalForm();
        //On squizz le main avec un attribut Aria-hidden
        document.querySelector("#main").setAttribute("aria-hidden", true);
        document.querySelector("#dialog").setAttribute("aria-hidden", false);
        hiddenScrollBar();
        //on focus sur le premier champ de saisie
        document.querySelector("#firstname").focus();
        // On active les event click sur la modal
    }


    
}



const indexEvent = new IndexEvent()