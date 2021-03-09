
let createImage = function (thisData,inc) {

    this.elHTML = 
  
        `<article class="sticker__media sticker__media--img" > 
            
                  <a href="#" class="flexImg"  data-js="openCarousel" data-item="${inc}">
                    <img class="imgFlex ${thisData.class}" src="${thisData.dirMedia}${thisData.image}" 
                    data-js="openCarousel" data-item="${inc}"                        
                          alt="Cette photo ce nomme ${ucfirst(thisData.alt)}                        
                          à un prix de ${thisData.price} euro et à actuellement eu ${thisData.likes} like. "/>
                  </a>                      
          
              <article class="sticker__media--info">   
                <h2 class="sticker__media--title" aria-hidden="true">${ucfirst(thisData.alt)}</h2>
                <p class="sticker__media--price"  aria-hidden="true">${thisData.price} €</p>
                <bouton class="sticker__media--like" data-js="addLike"  
                aria-label="Bouton vous permettant d'ajouter une mention j'aime">
                ${thisData.likes}<i class="fas fa-heart fontIcon"></i></bouton>
              </article>
        </article>`   
    
  };
  
  
  
  //Creation du bloc HTML pour les Videos
  // La fonction est appellée par l'usine
  let createVideo = function (thisData,inc) {
  
    this.elHTML =  
  
        `<article class="sticker__media sticker__media--video">
            <a href="#" class="flexImg" data-js="openCarousel" data-item="${inc}" >              
                  <video class="imgFlex ${thisData.class}" width="100%"   data-js="openCarousel" data-item="${inc}">
                  <source src="${thisData.dirMedia}${thisData.video}" type="video/mp4"></video>              
              <span class="sr__only">Cette vidéo ce nomme ${ucfirst(thisData.alt)},
              à un prix de ${thisData.price} euro et à actuellement eu ${thisData.likes} mention j'aime. </span> 
            </a>
            <article class="sticker__media--info">   
              <h2 class="sticker__media--title" aria-hidden="true">${ucfirst(thisData.alt)}</h2>
              <p class="sticker__media--price"  aria-hidden="true">${thisData.price} €</p>
              <p class="sticker__media--like" data-js="addLike">${thisData.likes}<i class="fas fa-heart fontIcon" aria-hidden="true"></i></p>
              <span class="sr__only">Bouton vous permettant d'ajouter une mention j'aime</span>  
          </article>
        </article>` 
    
  };

