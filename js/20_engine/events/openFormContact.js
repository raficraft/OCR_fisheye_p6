const openFormContact = ()=>{


   

    console.log('apelle de la modalBox'); 

    const factoryHtml = new htmlFactory 

    // La condition empêche l'affichage de plusieurs boite modal
    if(!document.querySelector('#formContact')){

        // On envoie à l'atelier qui nous retourne un objet contenant la boite modal
        // telle que construite dans le fichier designHTML/modalBox.js

        let thisHtmlObject = factoryHtml.createHtmlEl(modalBox,'elHtmlObject')                   

        //On récupère l'identités liés à l'id passé en url        
        let identity = getData.getIdentity(data)            

        // On ajoute le nom du photographe de manière dynamique avant insertion ^^
        thisHtmlObject.querySelector('#titleContact').textContent = identity.name;

        document.body.appendChild(thisHtmlObject,body);


    }else{

        // on remet l'attribut open sur la modalBox
        let contactForm = document.querySelector('#formContact');
        contactForm.setAttribute('open' , 'open');
    }

}