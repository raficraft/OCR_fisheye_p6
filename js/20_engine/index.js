
   
    const targetIdentity = document.getElementById("main__wrapper");    
    let getComponent = new componentsFactory() 

    const showIdentities = () =>{
        
        //On récupère l'identités liés au TAG passé en url   {?tags=tag}   
        
        let identities_JSON = GetData.getIdentities() 
        //on passe l'identité dans l'usine
        let identityComponent = getComponent.createComponents('identities',identities_JSON)
        renderComponent(identityComponent,targetIdentity)
    }
    

     const showIdentityByTag = () =>{

        let identityByTag_JSON = GetData.getIdentitiesByTag(browserInfo.request.tagURL)
        //on passe l'identité dans la factory
        let identityComponent = getComponent.createComponents('identities',identityByTag_JSON) 
        renderComponent(identityComponent,targetIdentity)
    }



    if(browserInfo.request.tagURL === false){

        showIdentities()
        
       }else{    
           
           showIdentityByTag()
           redifineDistribution_StickerIdentity() //voir function/tools.js NB : écrire la doc dans tools.js

    }