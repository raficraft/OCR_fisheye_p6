let openFormContact = () =>{



    factory.injectModalForm()
    //On passe le main avec un attribut Aria-hidden
    document.querySelector('#main').setAttribute('aria-hidden', true);
    document.querySelector('#dialog').setAttribute('aria-hidden', false);
    hiddenScrollBar()
    //on focus sur le premier champ de saisie
    document.querySelector('#firstname').focus()
    // On active les event click sur la modal
    new EventsDispatcher('#dialog [data-js]')

     
}


let closeModal = (target) => {

    restoreScrollBar()
    document.querySelector('#main').setAttribute('aria-hidden', false);
    document.querySelector('#dialog').setAttribute('aria-hidden', true);
    
    //On repositionne le focus sur le bouton de contact
    let origineCall = document.querySelector('button[data-js="openFormContact"]')
    origineCall.focus()
    

}

let submitModal = () => {

  /* let submitMessage = `<div class="submitMessage">
                            <h1>votre message à bien été transmit</h1>
                         </div>`*/

    let dataForm = {}

    let inputsForm = document.forms["sendMessage"].querySelectorAll('.brickInput');

    inputsForm.forEach(el =>   dataForm[el.name] = el.value  )

    console.log(dataForm)
    //Les informations collectés dans dataForm seront au fichier de validation
    closeModal()

}