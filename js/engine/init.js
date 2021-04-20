class Init {
    constructor(){

            if(browserInfo.request.idURL === false){ 

                //Injection dans la page Index 
                
                if(!browserInfo.request.tagURL){

                    factory.injectIndex()

                }else{
                    
                    factory.injectIndexByTag()

                    redifineDistribution_StickerIdentity() //voir function/tools.js NB : écrire la doc dans tools.js
                    // On filtre les photographes par Tag on positionnne le focus sur le lien correspondant
                    // En ajoutant un style on peut obtenir un pseudo genre de class CSS 'active'
                    document.querySelector(`header nav A[href='index.html?tags=${browserInfo.request.tagURL}']`).focus()                            
                }

            }else{

            
                //Injection de la page dédié à un photographe
                factory.injectGallery()

            }
    }
}

const factory = new Factory()
new Init()

































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
