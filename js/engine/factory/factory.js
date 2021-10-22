   class Factory{

        constructor(){

            this.targetHeader = document.querySelector("header");
            this.targetMain = document.getElementById("main");
            this.targetMainWrapper = document.getElementById("main__wrapper");
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
            this.getComponent.renderComponent(identityComponent,this.targetMainWrapper)
        }

        injectIdentityByTag = () =>{
            let dataJSON = GetData.getIdentitiesByTag(browserInfo.request.tagURL)
            let identityComponent = this.getComponent.createComponents(new createSticker(dataJSON)) 
            this.getComponent.renderComponent(identityComponent,this.targetMainWrapper)
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

        injectContactBtn = () => {     
            let contactBtnComponent = this.getComponent.createComponents(new CreateContactBtn())
            this.getComponent.renderComponent(contactBtnComponent,this.targetMain)
        }

        injectModalForm = () => {      
            let modalFormComponent = this.getComponent.createComponents(new createModalForm())
            this.getComponent.renderComponent(modalFormComponent,this.targetRoot)
            new ModalEvents()

        }


        injectCarousel = () => {
        
            let dataJSON = GetData.getMediaByIdentity()    
            let carouselComponent = this.getComponent.createComponents(new createCarousel(dataJSON))
            this.getComponent.renderComponent(carouselComponent,this.targetRoot)
        }


        //Construction des pages

        injectIndex(){
            this.injectHeader()
            this.injectIdentities()
        }

        injectIndexByTag(){
            this.injectHeader()
            this.injectIdentityByTag()
        }

        injectGallery(){
            
            document.querySelector('.main__wrapper').classList.remove('main__wrapper--index')
            document.querySelector('.main__wrapper').classList.toggle('main__wrapper--gallery')

            this.injectHeader()
            this.injectIdentity()    
            this.injectCustomSelect()
            this.injectMedia()    
            this.injectCounter()  
            this.injectContactBtn() 

        }
    
    }

