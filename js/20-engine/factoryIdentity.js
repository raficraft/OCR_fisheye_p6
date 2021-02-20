
 

function identityFactory(){
    this.createIdentity = function(dataIdentity,method){
        let makeStickerIdentity = [];
        //Repetroire ou ce trouve l'image du photographe
     
        let entries1 =    `dirImg`
        let entriesVal1 = `img/Photographers_photos/`

        //Entrées de controle permettant de savoir si on est sur la
        //page index ou dans la page photographer (renommée en gallery).
        let entries2 = `idURL`
        let entriesVal2 = false


        //Boucle for permettant d'ajouter les entrées
     
        //On ajoute des entrées au tableau passés en argument
        for(var i = 0; i < dataIdentity.length; i++){
    
            dataIdentity[i][entries1] = entriesVal1
            dataIdentity[i][entries2] = entriesVal2
        }

        i=0;

        if(method === 'all')
            //On boucle sur les identités
            dataIdentity.map(function(identitys){  
                makeStickerIdentity[i++] = new createSticker(identitys);
            })
        

        if(method === 'justOne'){

            //On recupe une seul Identité
            dataIdentity[entries1] = entriesVal1
            // la propriété dirURL est redifinie à true pour dire à l'atelier 
            // de créer le bouton de contact
            entriesVal2 = true
            dataIdentity[entries2] = entriesVal2
            makeStickerIdentity = new createSticker(dataIdentity);
        
           
        }




        return makeStickerIdentity
    }

}


//Constructeur d'etiquette  
let createSticker = function(thisData){
    console.log(thisData);
      
        this.elHTML =
            `<article class="sticker">
                <header>
                    <a class="identity flexImg" href="gallery.html?id=${thisData.id}" alt="${thisData.name}">
                    <img class="imgFlex" src="${thisData.dirImg}${thisData.portrait}" height="100px"/>
                    </a>
                </header>`

    //N'affiche le bouton de contact que dans la page dédié au photographe
    

    if(thisData.idURL !== false){            
        this.elHTML += 
                `<button type="button">Me contacter</button>`
    }
        this.elHTML+=  
                `<article class="sticker__info">                        
                    <h2>${thisData.name}</h2>
                    <p class="info__city">${thisData.city}, ${thisData.country}</p>
                    <p class="info__tagline">${thisData.tagline}</p>
                    <p class="info__price">${thisData.price}€/jour</p>                       
                <footer class="nav nav__filter">`


    thisData.tags.forEach(tag =>{    
        this.elHTML +=  
                 `<span class="filter"><a href="${tag}">#${tag}</a></span>`    
    }) 
        this.elHTML += 
                '</footer></article></article>'  
           
      
}


//Affiche le contenue de l'atelier
function showIdentity(showThis){

    console.log(showThis);
    let showElHtml = ""


    if (!showThis.length){

        showElHtml = showThis.elHTML
        
    }else{
        showThis.map(function(thisIdentity){
            console.log(thisIdentity.elHtml);
            showElHtml += thisIdentity.elHTML
        })
    }
  
    
    let identityContainer = document.getElementById("main__wrapper");    
    identityContainer.innerHTML = showElHtml;
    
  }


//Exectuion de l'usine et de ses ateliers

   
//On instancie l'usine
let factory2 = new identityFactory





if(idURL !== false){
//On récupère l'identités liés à l'id passé en url 
       
    let identity = getData.getIdentity(data,idURL)
    console.log(identity);
    //on passe l'identité dans l'usine
    let newIdentity = factory2.createIdentity(identity,'justOne')
    console.log(newIdentity);
    showIdentity(newIdentity)
}else{

    let identity = getData.getAllIdentity(data,idURL)
    console.log(identity);
    //on passe l'identité dans l'usine
    let newIdentity = factory2.createIdentity(identity,'all')
    console.log(newIdentity);
     showIdentity(newIdentity)


}












// l'usine (factory) permet de passer une commande aux ateliers (workShop)
// Les ateliers fabrique les bloc HTML (produits)
// la commande store (magasin/site Web) permet d'afficher les produits dans les étals (rayonnage/contentant HTML)

 


// L'on construit une seul usine qui prend deux paramètres
// @data 
// @method


    //@makeAll
    // créer les miniatures de tous les photographes.  
    //@makeUnique  
    // créer la miniature d'un seul photographe (contient le bouton "Me contacter").

    //@makeImage
    // créer la miniature pour chaque images.
    //@makeVideo
    // créer la miniature pour les videos.



  