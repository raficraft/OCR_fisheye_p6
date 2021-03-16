

const factory = new Factory()




if(browserInfo.request.idURL === false){ 

    //Injection dans la page Index 
    
    if(browserInfo.request.tagURL !== false){
            
        factory.injectIdentityByTag()
        redifineDistribution_StickerIdentity() //voir function/tools.js NB : écrire la doc dans tools.js

    }else{

        factory.injectIdentities()

    }

}else{
       
        //Injection dans la page gallery
        factory.injectIdentity()
        factory.injectMedia()
        factory.injectCounter()
        

        new EventsDispatcher('[data-js]')
        new CustomSelect('.customSelect__wrapper')

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
