
    const methodRenderIdentity = 'identity' 
    const methodRenderMedia_Gallery = 'media'
    const methodRenderCounter_Gallery = 'counter'
    //Container recevant les données créer par la factory et envoyé au rendu
    const targetIdentity = document.getElementById("main__wrapper");
    const targetMedia = document.querySelector('.photography');  
    const targetCounter = document.getElementById('body')


    /**
     * Fonction d'affichage des components commander à la Factory
     */
    const showIdentities = () =>{
        //On récupère l'identités liés au TAG passé en url   {?tags=tag}   
        let identityByTag_JSON = getData.getIdentitiesByTag(browserInfo.request.tagURL)
        //on passe l'identité dans l'usine
        let identityComponent = getComponent.createComponents(identityByTag_JSON ,'identities')
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)
    }
    
    const showIdentity = () => {

        //On récupère l'identités liés à l'id passé en url   {?id=id}     
        let identity_JSON = getData.getIdentity(data)
        //On passe le JSON dans la factory
        const identityComponent = getComponent.createComponents(identity_JSON ,'oneIdentity') 
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)
    }

    const showIdentityByTag = () =>{
        let identities_JSON = getData.getIdentities()  
        //on passe l'identité dans la factory
        let identityComponent = getComponent.createComponents(identities_JSON ,'identities') 
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)
    }



    const showMedia = () => {   

        console.error('showMedia');
           
        //On récupère les media liés à l'ID du photographe passé en URL,trié selon leur popularité {?id=id} 
        let mediasByIdentity_JSON = getData.getMediaByIdentity(data)
        console.log(mediasByIdentity_JSON);
        //On passe le JSON dans la factory
        let mediaComponent =  getComponent.createComponents(mediasByIdentity_JSON,'makeMedia')
        renderComponent(mediaComponent,targetMedia,methodRenderMedia_Gallery)
    }


    const showCounter = () => {
        console.error('showCounter');
      
        let counter_JSON = getData.getCountLike()
        console.log(counter_JSON);
        let counterComponent = getComponent.createComponents(counter_JSON,'makeCounter')
        renderComponent(counterComponent,targetCounter,methodRenderCounter_Gallery)
    


    }



    //Exectuion de l'usine et de ses ateliers    
    let getComponent = new componentsFactory()    
    
    
    if(browserInfo.request.idURL === false){   

        //affichage pour la page index  
      
        if(browserInfo.request.tagURL !== false){

         showIdentities()
         redifineDistribution_StickerIdentity() //voir function/tools.js NB : écrire la doc dans tools.js

        }else{          

          showIdentityByTag()

        }
        
    }else{

        //Affichage pour la page Gallery

        showIdentity()
        showMedia()
        showCounter()
      
    }






