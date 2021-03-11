

    //Exectuion de l'usine et de ses ateliers    
    let getComponent = new componentsFactory()  

    //Container recevant les données créer par la factory et envoyé au rendu
    const targetIdentity = document.getElementById("main__wrapper");
    const targetMedia = document.querySelector('.photography');  
    const targetRoot = document.getElementById('body')
    

    //gallery.html

    const showIdentity = () => {
        //On récupère l'identités liés à l'id passé en url   {?id=id}     
        let identity_JSON = GetData.getIdentity()
        //On passe le JSON dans la factory
        const identityComponent = getComponent.createComponents('oneIdentity',identity_JSON) 
        renderComponent(identityComponent,targetIdentity)
    }

    const showMedia = () => {   
           
        //On récupère les media liés à l'ID du photographe passé en URL,trié selon leur popularité {?id=id} 
        let mediasByIdentity_JSON = GetData.getMediaByIdentity()
        //On passe le JSON dans la factory
        let mediaComponent =  getComponent.createComponents('makeMedia',mediasByIdentity_JSON)
        renderComponent(mediaComponent,targetMedia)
    }


    const showCounter = () => {     
        let counter_JSON = GetData.getCountLike()
        let counterComponent = getComponent.createComponents('makeCounter',counter_JSON)
        renderComponent(counterComponent,targetRoot)
    }

    const showModalForm = () => {    
        let modalFormComponent = getComponent.createComponents('modalForm')
        renderComponent(modalFormComponent,targetRoot)
    }


    const showCarousel = () => {
        if(document.querySelector('.slider')){
            document.querySelector('.slider').remove()
        }
        let mediasByIdentity_JSON = GetData.getMediaByIdentity()    
        let carouselComponent = getComponent.createComponents('carousel',mediasByIdentity_JSON)
        renderComponent(carouselComponent,targetRoot)
    }
    
  
    //render

        //Affichage pour la page Gallery
        //showIdentity()

        showIdentity()
        showMedia()
        showCounter()
        showModalForm()
        showCarousel()

        //remettre en place dans les event
        new Carousel(document.querySelector('.carousel__container'),{
            slidesToScroll : 1,
            slidesVisible : 1,
            currentItem : 0,
            loog : true
        })
 