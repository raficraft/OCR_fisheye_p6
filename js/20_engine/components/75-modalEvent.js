class ModalEvents {
  constructor() {


    this.submitBtn = document.querySelector('[data-js="submitModal"]')
    this.closeBtn = document.querySelector('.dialogBox__close')
    console.log(this.submitBtn);
   
    this.keyBoardControl();
    this.createNavigation();   


     this.submitBtn.addEventListener('click',(e)=>{
       this.submitModal()
     })


     this.closeBtn.addEventListener('click',(e)=>{
         e.preventDefault(); e.stopPropagation()
        this.closeModal()
       })
    
     
  }

  /**
   *
   */

  closeModal() {
    restoreScrollBar();
    document.querySelector("#main").setAttribute("aria-hidden", false);
    document.querySelector("#dialog").remove();

    //On repositionne le focus sur le bouton de contact
    let origineCall = document.querySelector(
      'button[data-js="openFormContact"]'
    );
    origineCall.focus();
  }
  /**
   *
   */

  keyBoardControl(){
    document.addEventListener("keydown", (e) => {

      if (document.querySelector("#dialog")) {
        if (e.key === "Escape") {
            restoreScrollBar();
            document.querySelector("#main").setAttribute("aria-hidden", false);
            document.querySelector("#dialog").remove();

            //On repositionne le focus sur le bouton de contact
            let origineCall = document.querySelector(
              'button[data-js="openFormContact"]'
            );
            origineCall.focus();
        }
      }
    });
  }

  /**
   *
   */

  submitModal() {
    let submit = false;
    let dataForm = {};

    let inputsForm = document.forms["sendMessage"].querySelectorAll(
      ".brickInput"
    );

    inputsForm.forEach((el) => {
      dataForm[el.name] = el.value;

      if (el.value !== "") {
        submit = true;
      } else {
        submit = false;
      }
    });

    console.log(dataForm);
    //Les informations collectés dans dataForm seront transmit au fichier de validation

    if (submit !== false) {
      this.closeModal();
    }
  }

  createNavigation(){   

    this.submitBtn.addEventListener('keydown', (e)=>{

      if(e.key === 'Tab'){ 
        e.preventDefault(); e.stopPropagation();
        console.log("tab");
        this.closeBtn.focus()
      }

    })
  }

}
