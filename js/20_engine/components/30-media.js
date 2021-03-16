/*
let createImage = function (thisData,inc) {

    this.elHTML = 
  
        `<article class="sticker__media sticker__media--img" > 
            
                  <a href="#" class="flexImg"  data-js="openCarousel" data-item="${inc}">
                    <img class="imgFlex ${thisData.class}" src="${thisData.dirMedia}/300/${thisData.image}" 
                    data-js="openCarousel" data-item="${inc}"                        
                          alt="Cette photo ce nomme ${ucFirst(thisData.alt)}                        
                          à un prix de ${thisData.price} euro et à actuellement eu ${thisData.likes} like. "/>
                  </a>                      
          
              <article class="sticker__media--info">   
                <h2 class="sticker__media--title" aria-hidden="true">${ucFirst(thisData.alt)}</h2>
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
                  <video class="imgFlex ${thisData.class}"  data-js="openCarousel" data-item="${inc}" preload>
                  <source src="${thisData.dirMedia}/video/${thisData.video}" type="video/mp4"></video>              
              <span class="sr__only">Cette vidéo ce nomme ${ucFirst(thisData.alt)},
              à un prix de ${thisData.price} euro et à actuellement eu ${thisData.likes} mention j'aime. </span> 
            </a>
            <article class="sticker__media--info">   
              <h2 class="sticker__media--title" aria-hidden="true">${ucFirst(thisData.alt)}</h2>
              <p class="sticker__media--price"  aria-hidden="true">${thisData.price} €</p>
              <p class="sticker__media--like" data-js="addLike">${thisData.likes}
              <i class="fas fa-heart fontIcon" aria-hidden="true"></i></p>
              <span class="sr__only">Bouton vous permettant d'ajouter une mention j'aime</span>  
          </article>
        </article>` 
    
  };

*/


const createMedia = function(thisData){


  console.error('pouet');
  alterateMediaObject(thisData) //NB ecrire la doc dans tools   
  this.elHTML = ''

  thisData.forEach((media,key) => {

    this.elHTML += `<article class="sticker__media sticker__media--img" >             
                      <a href="#" class="flexImg"  data-js="openCarousel" data-item="${key}">`


                      if(media.image){
                        //On construit l'élément HTML pour les images
                       this.elHTML += `<img class="imgFlex ${media.class}" src="${media.dirMedia}/300/${media.image}" 
                        data-js="openCarousel" data-item="${key}"                        
                              alt="Cette photo ce nomme ${ucFirst(media.alt)}                        
                              à un prix de ${media.price} euro et à actuellement eu ${media.likes} like. "/> `                   
                        }
    
                        if(media.video){
                        //On construit l'élément HTML pour les video
                        this.elHTML += `<video class="imgFlex ${media.class}"  data-js="openCarousel" data-item="${key}" preload>
                  <source src="${media.dirMedia}/video/${media.video}" type="video/mp4"></video>              
              <span class="sr__only">Cette vidéo ce nomme ${ucFirst(media.alt)},
              à un prix de ${media.price} euro et à actuellement eu ${media.likes} mention j'aime. </span>`
                                                 
                        } 




   this.elHTML += `   </a>
   <article class="sticker__media--info">   
     <h2 class="sticker__media--title" aria-hidden="true">${ucFirst(media.alt)}</h2>
     <p class="sticker__media--price"  aria-hidden="true">${media.price} €</p>
     <p class="sticker__media--like" data-js="addLike">${media.likes}
     <i class="fas fa-heart fontIcon" aria-hidden="true"></i></p>
     <span class="sr__only">Bouton vous permettant d'ajouter une mention j'aime</span>  
 </article>
</article>` 
    
  });


  console.log(thisData.length)

  console.log(this.ElHTML);

        //dataJSON.map(function(media){ })

}