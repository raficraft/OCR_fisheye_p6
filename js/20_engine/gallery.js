



    const methodRenderIdentity = 'identity' 
    const methodRenderMedia_Gallery = 'media'
    const methodRenderCounter_Gallery = 'counter'
    const methodRenderModalForm_Gallery = 'modalForm'
    const methodRenderCarousel_Gallery = 'carousel'
    //Container recevant les données créer par la factory et envoyé au rendu
    const targetIdentity = document.getElementById("main__wrapper");
    const targetMedia = document.querySelector('.photography');  
    const targetRoot = document.getElementById('body')


    //Exectuion de l'usine et de ses ateliers    
    let getComponent = new componentsFactory()    

    //gallery.html

    const showIdentity = () => {

        //On récupère l'identités liés à l'id passé en url   {?id=id}     
        let identity_JSON = getData.getIdentity()
        //On passe le JSON dans la factory
        const identityComponent = getComponent.createComponents('oneIdentity',identity_JSON) 
        renderComponent(identityComponent,targetIdentity,methodRenderIdentity)
    }

    const showMedia = () => {   
           
        //On récupère les media liés à l'ID du photographe passé en URL,trié selon leur popularité {?id=id} 
        let mediasByIdentity_JSON = getData.getMediaByIdentity()
        //On passe le JSON dans la factory
        let mediaComponent =  getComponent.createComponents('makeMedia',mediasByIdentity_JSON)
        renderComponent(mediaComponent,targetMedia,methodRenderMedia_Gallery)
    }


    const showCounter = () => {
        console.error('showCounter');      
        let counter_JSON = getData.getCountLike()
        let counterComponent = getComponent.createComponents('makeCounter',counter_JSON)
        renderComponent(counterComponent,targetRoot,methodRenderCounter_Gallery)
    }

    const showModalForm = () => {
        console.error('modalForm');      
        let modalFormComponent = getComponent.createComponents('modalForm')
        console.log(modalFormComponent);
        renderComponent(modalFormComponent,targetRoot,methodRenderModalForm_Gallery)
    }


    const showCarousel = () => {
        console.error('Carousel');  
        let mediasByIdentity_JSON = getData.getMediaByIdentity()    
        let carouselComponent = getComponent.createComponents('carousel',mediasByIdentity_JSON)
        console.log(carouselComponent);
        renderComponent(carouselComponent,targetRoot,methodRenderCarousel_Gallery)
    }
    
  

        //Affichage pour la page Gallery
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