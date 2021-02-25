
console.log(window.location.search);

const test = 'lol';


let idURL = false

if(window.location.search){
    //On récupere les paramètres passer dans l'url (?id=number)
    let get = window.location.search.substring(1).split('=');

    paramRequest = get[0];
    valueRequest = get[1];

    //On transforme la valeur string en number
    idURL =parseInt(valueRequest)

    
}




function getJson(url, callback) {
    return fetch(url).then(function(response) {
        return response.json();
    });
}




  const getData = {
    getAll: async function() {
      const data = await getJson('js/getJson/data.json');
      return data.photographers;
    }
  }


function identityFactory(){
    this.createIdentity = function(dataIdentity,method){
        let makeStickerIdentity = [];
        //Repetroire ou ce trouve l'image du photographe
     
        let dirImg =    `dirImg`
        let srcImg = `img/Photographers_photos/`

        //Entrées de controle permettant de savoir si on est sur la
        //page index ou dans la page photographer (renommée en gallery).
        let dirURL = `dirURL`
        let dirURL_trueORfalse = false


        //Boucle for permettant d'ajouter les entrées
     
     

        if(method === 'all')


           //On ajoute des entrées au tableau passés en argument
           for(var i = 0; i < dataIdentity.length; i++){
    
            dataIdentity[i][dirImg] = srcImg
            dataIdentity[i][dirURL] = dirURL_trueORfalse
        }

        i=0;

            //On boucle sur les identités
            dataIdentity.map(function(identitys){  
                makeStickerIdentity[i++] = new createSticker(identitys);
            })
        

        if(method === 'justOne'){

            //On recupe une seul Identité
            dataIdentity[dirImg] = srcImg
            // la propriété dirURL est redifinie à true pour dire à l'atelier 
            // de créer le bouton de contact
            dirURL_trueORfalse = true
            dataIdentity[dirURL] = dirURL_trueORfalse
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
            showElHtml += thisIdentity.elHTML
        })
    }
  
    
    let identityContainer = document.getElementById("main__wrapper");    
    identityContainer.innerHTML = showElHtml;
    
  }


//Exectuion de l'usine et de ses ateliers

   
//we instantiate the factory
let factory = new identityFactory


     getData.getAll().then(photographers => {

        let identity = photographers
        console.log(identity);
        //we pass the identity in the factory
        let newIdentity = factory.createIdentity(identity,'all')
        console.log(newIdentity);
        showIdentity(newIdentity)

       
    }).catch(err => {
        console.log(err);
    });
    















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



  







