

class ModalForm {
  constructor() {
    this.openFormContact();
    this.keyBoardControl();
    this.createNavigation();


     this.tabEl = {
       cross: document.querySelector(".dialogBox__close"),
       submit: document.querySelector(".btn--modal"),
     };  
  }

  /**
   *
   */

  openFormContact() {
    factory.injectModalForm();
    //On passe le main avec un attribut Aria-hidden
    document.querySelector("#main").setAttribute("aria-hidden", true);
    document.querySelector("#dialog").setAttribute("aria-hidden", false);
    hiddenScrollBar();
    //on focus sur le premier champ de saisie
    document.querySelector("#firstname").focus();
    // On active les event click sur la modal
    new EventsDispatcher("#dialog[data-js], #dialog [data-js]");
  }

  /**
   *
   */

  static closeModal() {
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
      console.log(e);

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

  static submitModal() {
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
       document.addEventListener("keydown", (e) => {
         console.log(e);

         if (document.querySelector("#dialog")) {
           if (e.key === "Tab") {



            
            
           }
         }
       });

  }

}
