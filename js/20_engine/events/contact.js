let openFormContact = () =>{

    showModalForm()

      //On passe le main avec un attribut Aria-hidden
      document.querySelector('#main').setAttribute('aria-hidden', true);
      document.querySelector('#dialog').setAttribute('aria-hidden', false);
      hiddenScrollBar()
      //on focus sur le premier champ de saisie
      document.querySelector('#firstname').focus()
}


let closeModal = (target) => {

    restoreScrollBar()
    document.querySelector('#main').setAttribute('aria-hidden', false);
    document.querySelector('#dialog').setAttribute('aria-hidden', true);

    //On repositionne le focus sur le bouton de contact
    target.focus()

}