class IndexEvent{

    constructor(){

        console.error('YOLO');

        this.openBtn = document.querySelectorAll('[data-js="openFormContact"]')

        console.log(this.openBtn);

        this.openBtn.forEach(btn => {
            console.log('click');
            btn.addEventListener('click',(e) => {
              this.openFormContact()
            })
           
        });
    }

    openFormContact() {
        factory.injectModalForm();
        //On passe le main avec un attribut Aria-hidden
        document.querySelector("#main").setAttribute("aria-hidden", true);
        document.querySelector("#dialog").setAttribute("aria-hidden", false);
        hiddenScrollBar();
        //on focus sur le premier champ de saisie
        document.querySelector("#firstname").focus();
        // On active les event click sur la modal
    }

    
}



const indexEvent = new IndexEvent()