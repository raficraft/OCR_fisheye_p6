

const factory = new Factory()


if(browserInfo.request.idURL === false){ 

    //Injection dans la page Index 
    
    if(browserInfo.request.tagURL){

        factory.injectHeader()    
        factory.injectIdentityByTag()
        redifineDistribution_StickerIdentity() //voir function/tools.js NB : écrire la doc dans tools.js
        // On filtre les photographes par Tag on positionnne le focus sur le lien correspondant
        // En ajoutant un style on peut obtenir un pseudo genre de class CSS 'active'
        document.querySelector(`header nav A[href='index.html?tags=${browserInfo.request.tagURL}']`).focus() 
       

    }else{
        factory.injectHeader()
        factory.injectIdentities()
    }

}else{

        document.querySelector('.main__wrapper').classList.remove('main__wrapper--index')
        document.querySelector('.main__wrapper').classList.toggle('main__wrapper--gallery')
       
        //Injection dans la page dédié à un photographe
        factory.injectHeader()
        factory.injectIdentity()
        factory.injectCustomSelect()
        factory.injectMedia()
        factory.injectCounter()     


        //new CustomSelect('.customSelect__wrapper')

}

































/*

    if(browserInfo.request.tagURL === false){

        factory.injectIdentities()
        
    }else{    
           
        factory.injectIdentityByTag()
        redifineDistribution_StickerIdentity() //voir function/tools.js NB : écrire la doc dans tools.js

    }



    



        

        //render
    
            //Affichage pour la page Gallery 
            factory.injectIdentity()
            factory.injectMedia()
            factory.injectCounter()
         
    
            new EventsDispatcher('[data-js]')
            new CustomSelect('.customSelect__wrapper')
           
   */ 
