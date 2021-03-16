   class Factory{

        constructor(){

            this.targetMain = document.getElementById("main__wrapper");
            this.targetIdentity = document.getElementById("main__wrapper");
            this.targetMedia = document.querySelector('.photography');  
            this.targetRoot = document.getElementById('body')    
            this.getComponent = new workshopComponent() 

        }


        //index.html

        injectIdentities = () =>{        
            //On récupère l'identités liés au TAG passé en url   {?tags=tag}        
            let dataJSON = GetData.getIdentities() 
            //on passe l'identité dans la factory
            let identityComponent = this.getComponent.createComponents(new createSticker(dataJSON))
            renderComponent(identityComponent,this.targetMain)
        }


        injectIdentityByTag = () =>{

            let dataJSON = GetData.getIdentitiesByTag(browserInfo.request.tagURL)
            //on passe l'identité dans la factory
            let identityComponent = this.getComponent.createComponents(new createSticker(dataJSON)) 
            renderComponent(identityComponent,this.targetMain)
        }

        //gallery.html

        injectIdentity = () => {
            //On récupère l'identités liés à l'id passé en url   {?id=id}     
            let dataJSON = GetData.getIdentity()
            //On passe le JSON dans la factory
            const identityComponent = this.getComponent.createComponents(new createSticker(dataJSON)) 
            renderComponent(identityComponent,this.targetIdentity)
        }

        injectMedia = () => {   
            
            //On récupère les media liés à l'ID du photographe passé en URL,trié selon leur popularité {?id=id} 
            let dataJSON = GetData.getMediaByIdentity()
            //On passe le JSON dans la factory
            let mediaComponent =  this.getComponent.createComponents(new createMedia(dataJSON))
            renderComponent(mediaComponent,this.targetMedia)
        }


        injectCounter = () => {     
            let dataJSON = GetData.getCountLike()
            let counterComponent = this.getComponent.createComponents(new createCounter(dataJSON))
            renderComponent(counterComponent,this.targetRoot)
        }

        injectModalForm = () => {    
            let dataJSON = ''
            let modalFormComponent = this.getComponent.createComponents(new createModalForm())
            renderComponent(modalFormComponent,this.targetRoot)
        }


        injectCarousel = () => {
            if(document.querySelector('.slider')){
                document.querySelector('.slider').remove()
            }
            let dataJSON = GetData.getMediaByIdentity()    
            let carouselComponent = this.getComponent.createComponents(new createCarousel(dataJSON))
            renderComponent(carouselComponent,this.targetRoot)
        }
    


    }

