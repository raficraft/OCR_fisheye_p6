   class Factory{

        constructor(){

            this.targetHeader = document.querySelector("header");
            this.targetMain = document.getElementById("main__wrapper");
            this.targetIdentity = document.getElementById("main__wrapper");
            this.targetRoot = document.getElementById('body')    
            this.getComponent = new workshopComponent() 
        }
        
        //index.html

        /**
         * GetData 
         * CreateComponent
         * injectComponent
         */

        injectHeader = () =>{              
            let identityComponent = this.getComponent.createComponents(new createHeader())
            this.getComponent.renderComponent(identityComponent,this.targetHeader)
        }
        injectIdentities = () =>{              
            let dataJSON = GetData.getIdentities() 
            let identityComponent = this.getComponent.createComponents(new createSticker(dataJSON))
            this.getComponent.renderComponent(identityComponent,this.targetMain)
        }

        injectIdentityByTag = () =>{
            let dataJSON = GetData.getIdentitiesByTag(browserInfo.request.tagURL)
            let identityComponent = this.getComponent.createComponents(new createSticker(dataJSON)) 
            this.getComponent.renderComponent(identityComponent,this.targetMain)
        }

        //gallery.html

        injectIdentity = () => {    
            let dataJSON = GetData.getIdentity()
            const identityComponent = this.getComponent.createComponents(new createSticker(dataJSON)) 
            this.getComponent.renderComponent(identityComponent,this.targetIdentity)
        }

        injectCustomSelect = () => {    
            //const customSelectComponent = this.getComponent.createComponents(new createCustomSelect())             
            const customSelectComponent = this.getComponent.createComponents(new CreateCustomSelect())             
            this.getComponent.renderComponent(customSelectComponent,this.targetIdentity)
            window.customSelectEvent = new CustomSelectEvent()
        }

        injectMedia = () => {               
            let dataJSON = GetData.getMediaByIdentity()
            let mediaComponent =  this.getComponent.createComponents(new createMedia(dataJSON))
            this.getComponent.renderComponent(mediaComponent,this.targetIdentity)
            new mediaEvents
        }


        injectCounter = () => {     
            let dataJSON = GetData.getCountLike()
            let counterComponent = this.getComponent.createComponents(new createCounter(dataJSON))
            this.getComponent.renderComponent(counterComponent,this.targetRoot)
        }

        injectModalForm = () => {                 
            let modalFormComponent = this.getComponent.createComponents(new createModalForm())
            this.getComponent.renderComponent(modalFormComponent,this.targetRoot)
        }


        injectCarousel = () => {
            if(document.querySelector('.slider')){
                document.querySelector('.slider').remove()
            }
            let dataJSON = GetData.getMediaByIdentity()    
            let carouselComponent = this.getComponent.createComponents(new createCarousel(dataJSON))
            this.getComponent.renderComponent(carouselComponent,this.targetRoot)
        }
    
    }

