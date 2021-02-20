class Photographer {
    constructor(data,id ="") {
      this.data = data;
      this.id = id;
    }
    
    //Recupère tous les profils des photographe pour la page index.
    static getAllIdentity(){
      return data.photographers
    }
    //Recupère le profil du photographe selon l'ID passer dans l'URL
    static getIdentity() {
        let thisData = data.photographers.find(el => el.id === id)
        return thisData
    }
    //Récupère les photo du photographe selon l'ID passer dans l'url
    static getMedia(){
        let thisMedia =  data.media.filter(el => el.photographerId === id)
        return thisMedia
    }

    //Affiche tous les photographe dans la page index
    static showAllIdentity(){
  
        let thisData = this.getAllIdentity()
        let sticker = "";
    
        //Utiliser une boucle for pour créer les stickers
        // de tout les photographe
    
        thisData.forEach(el => 
    
          {  
            sticker +=  `<article class="sticker">
                          '<header>
                             <a class="flexImg" href="photographe.html?id=${el.id}" alt="${el.name}">
                             <img class="imgFlex" src="${el.imgDir}${el.portrait}" height="100px"/>
                             </a>
                           </header>
                           <article class="sticker__info">                        
                             <h2>${el.name}</h2>
                             <p class="info__city">${el.city}, ${el.country}</p>
                             <p class="info__tagline">${el.tagline}</p>
                             <p class="info__price">${el.price}€/jour</p>                       
                          <footer class="nav nav__filter">`
    
                  el.tags.forEach(tag =>{
    
                    sticker +=   `<span class="filter"><a href="${tag}">#${tag}</a></span>`
    
                  })
    
            sticker += '</footer></article></article>'  
          }         
        );  
          return sticker;  
    }
  
    //Affiche le photographe dont l'ID est passé dans l'url
    static showIdentity(){

        
      let el = this.getIdentity();  
      console.log(el);
  
      let sticker = ""

      sticker +=    `<article class="sticker">
                        <header>
                            <a class="identity flexImg" href="photographe.html?id=${el.id}" alt="${el.name}">
                            <img class="imgFlex" src="${el.imgDir}${el.portrait}" height="100px"/>
                            </a>
                        </header>
                        <article class="sticker__info">                        
                            <h2>${el.name}</h2>
                            <p class="info__city">${el.city}, ${el.country}</p>
                            <p class="info__tagline">${el.tagline}</p>
                            <p class="info__price">${el.price}€/jour</p>                       
                        <footer class="nav nav__filter">`

            el.tags.forEach(tag =>{

            sticker +=   `<span class="filter"><a href="${tag}">#${tag}</a></span>` 

            })

            sticker += '</footer></article></article>'



      return sticker

    }

    //Affiche les media du photographe dont l'ID est passé dans l'url
    static showMedia(){

        let thisMedia = this.getMedia()
        console.log(thisMedia);
        let stickerMedia =""

        let thisData = this.getIdentity()
        let tabName = thisData.name.split(' ');
        let name = tabName[0]
        let dirImg = 'img/'+name+'/'

        let i=0;

        thisMedia.forEach(el =>{

          console.log(el);
            if(el.image){

                stickerMedia +=  
                `<article class="sticker__media sticker__media--img sticker__media--${name}${i}">
                    <header class="flexImg">
                        <img class="imgFlex" src="${dirImg}${el.image}">
                    </header> 

                        <article>   
                                <p>${el.alt}</p>
                                <p>${el.price}€</p>
                                <p>${el.likes}</p>
                        </article>`                                                     
            }

            if(el.video){

                stickerMedia +=  
                
                `<article class="sticker__media sticker__media--video sticker__media--${name}${i}">
                    <header class="flexImg">
                        <video class="imgFlex" controls width="100%">
                        <source src="${dirImg}${el.video}" type="video/mp4"></video>
                    </header> 

                    <article>   
                        <p>${el.alt}</p>
                        <p>${el.price}€</p>
                        <p>${el.likes}</p>
                    </article>`
               
            }

            stickerMedia += `</article>`

         i++;  

        })

        return stickerMedia;

    }
  
  }




$.fn.postAjax = function(url,json,callback){

console.log('Envoie en base de données');

  $.ajax({ url : url,type: 'POST',dataType : "json",
  data: {json:json},


        success:function(R)  {
        console.log('retour de la  BDD : '+R.action);
        console.log(R);
        callback(R); 

        setTimeout(function(){      
          //Gestion des cookies

        }, 100); 
        },

        error:  function(R)  { 
          console.log(R);
          console.log('Erreur SQL. Contacter votre admin, case :'+R.action); 
        }

  });       
};    
 
