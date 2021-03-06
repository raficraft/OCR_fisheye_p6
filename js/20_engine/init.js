
//Init.js <--- Centralisé dans un fichier séparé

    //Exectuion de l'usine et de ses ateliers
    //On instancie l'usine
    let getComponent = new componentsFactory()

    //Container recevant les données créer par la factory et envoyé au rendu
    const targetIdentity = document.getElementById("main__wrapper");
    const targetMedia = document.querySelector('.photography');      
    
    
    // checkURL.request.idURL = id du photographe. Affichage pour la page gallery
    if(checkURL.request.idURL === false){   

        //affichage pour la page index
    
        const methodRenderIdentity_Index = 'identity' 
        //affichage si on demande un trie des photographe {?tags=tag}
        if(checkURL.request.tagURL !== false){
            
            let identityByTag_JSON = getData.getAllIdentityByTag(checkURL.request.tagURL)
            //on passe l'identité dans l'usine
            let identityComponent = getComponent.createComponents(identityByTag_JSON ,'allIdentities')

            renderComponent(identityComponent,targetIdentity,methodRenderIdentity_Index)

        }else{

            let allIdentity_JSON = getData.getAllIdentity()  
            //on passe l'identité dans l'usine
            let identityComponent = getComponent.createComponents(allIdentity_JSON ,'allIdentities') 

            renderComponent(identityComponent,targetIdentity,methodRenderIdentity_Index)

        }



        
    }else{

        //Affichage pour la page Gallery

        //On récupère l'identités liés à l'id passé en url   {?id=id}     
        let identity_JSON = getData.getIdentity(data)
        //On passe le JSON dans la factory
        const identityComponent = getComponent.createComponents(identity_JSON ,'oneIdentity')   
        const methodRenderIdentity_Gallery = 'identity' 

        renderComponent(identityComponent,targetIdentity,methodRenderIdentity_Gallery)


            
        //On récupère les media liés à l'ID du photographe passé en URL {?id=id} 
        let mediasByIdentity_JSON = getData.getMediaByIdentity(data)
        //On passe le JSON dans la factory
        let mediaComponent =  getComponent.createComponents(mediasByIdentity_JSON,'makeMedia')
        const methodRenderMedia_Gallery = 'media'

        renderComponent(mediaComponent,targetMedia,methodRenderMedia_Gallery)
      
    }




