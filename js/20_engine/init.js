
    const methodRenderIdentity = 'identity' 
    const methodRenderMedia_Gallery = 'media'
    //Container recevant les données créer par la factory et envoyé au rendu
    const targetIdentity = document.getElementById("main__wrapper");
    const targetMedia = document.querySelector('.photography');  


    /**
     * Fonction d'affichage des components commander à la Factory
     */
    const showAllIdentity = () =>{
        //On récupère l'identités liés au TAG passé en url   {?tags=tag}   
        let identityByTag_JSON = getData.getAllIdentityByTag(checkURL.request.tagURL)
        //on passe l'identité dans l'usine
        let identityComponent = getComponent.createComponents(identityByTag_JSON ,'allIdentities')
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)
    }

    const showIdentityByTag = () =>{
        let allIdentity_JSON = getData.getAllIdentity()  
        //on passe l'identité dans la factory
        let identityComponent = getComponent.createComponents(allIdentity_JSON ,'allIdentities') 
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)

    }

    const showIdentity = () => {

        //On récupère l'identités liés à l'id passé en url   {?id=id}     
        let identity_JSON = getData.getIdentity(data)
        //On passe le JSON dans la factory
        const identityComponent = getComponent.createComponents(identity_JSON ,'oneIdentity') 
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)
    }


    const showMedia = () => {   
            
        //On récupère les media liés à l'ID du photographe passé en URL,trié selon leur popularité {?id=id} 
        let mediasByIdentity_JSON = getData.getMediaByIdentity(data)
        //On passe le JSON dans la factory
        let mediaComponent =  getComponent.createComponents(mediasByIdentity_JSON,'makeMedia')
        renderComponent(mediaComponent,targetMedia,methodRenderMedia_Gallery)
    }



    //Exectuion de l'usine et de ses ateliers    
    let getComponent = new componentsFactory()    
    
    
    if(checkURL.request.idURL === false){   

        //affichage pour la page index  
      
        if(checkURL.request.tagURL !== false){

         showAllIdentity()

        }else{          

          showIdentityByTag()

        }
        
    }else{

        //Affichage pour la page Gallery

        showIdentity()
        showMedia()
      
    }






