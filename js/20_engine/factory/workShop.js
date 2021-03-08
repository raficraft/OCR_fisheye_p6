

//Constructeur d'etiquette  
let createSticker = function(thisData){

  let tagTitle = 'h1';  let tabIndexExclude = 'tabindex="-1"'
  if(browserInfo.path === 'index' ){
     tagTitle = 'h2' 
  }
    this.elHTML =
        `<article class="sticker">
            <header>
                <a class="identity flexImg" href="gallery.html?id=${thisData.id}" ${tabIndexExclude}>
                  <img class="identity__img imgFlex" src="img/Photographers_photo/${thisData.portrait}"
                       alt="Photographe affilié au site Fisheye : ${thisData.name}" ${tabIndexExclude} />
                </a>
            </header>
            <button class="btn btn--highRes" type="button"  data-js="openFormContact" 
                    aria-labeledby="Ouvre le formulaire de contact" 
                    aria-haspopup="dialog"
                    aria-controls="dialog">
                    Contactez-moi
            </button>
            <article class="sticker__info">                        
                <${tagTitle}>${thisData.name}</${tagTitle}>
                <p class="info__city">${thisData.city}, ${thisData.country}</p>
                <p class="info__tagline">${thisData.tagline}</p>
                <p class="info__price">${thisData.price}€/jour</p>                       
                <footer class="nav nav__filter">`

    thisData.tags.forEach(tag =>{    
        this.elHTML +=  
                `<span class="filter"><a href="index.html?tags=${tag}" data-js="tagURL">#${tag}</a></span>`    
    }) 
    this.elHTML += 
                `</footer>
            </article>
        </article>` 
}



//Creation du bloc HTML pour les Images
// La fonction est appellée par l'usine

let createImage = function (thisData,inc,) {

    this.elHTML = 
  
        `<article class="sticker__media sticker__media--img"> 
              <header >     
                  <a href="#">
                    <p class="flexImg">
                      <img class="imgFlex ${thisData.class}" src="${thisData.dirMedia}${thisData.image}"
                           data-js="openCarousel" data-item="${inc}" alt="${ucfirst(thisData.alt)}"/>
                    </p>
                  </a>
              </header>
              <article class="sticker__media--info">   
                <h2 class="sticker__media--title">${ucfirst(thisData.alt)}</h2>
                <p class="sticker__media--price">${thisData.price} €</p>
                <p class="sticker__media--like" data-js="addLike">${thisData.likes}<i class="fas fa-heart fontIcon"></i></p>
              </article>
        </article>`   
    
  };
  
  
  
  //Creation du bloc HTML pour les Videos
  // La fonction est appellée par l'usine
  let createVideo = function (thisData,inc) {
  
    this.elHTML =  
  
        `<article class="sticker__media sticker__media--video">
            <header>
              <a href="#" class="flexImg">
                  <video class="imgFlex ${thisData.class}" width="100%" data-js="openCarousel" data-item="${inc}">
                  <source src="${thisData.dirMedia}${thisData.video}" type="video/mp4"></video>
              </a>
            </header>
            <article class="sticker__media--info">   
              <h2 class="sticker__media--title">${ucfirst(thisData.alt)}</h2>
              <p class="sticker__media--price">${thisData.price} €</p>
              <p class="sticker__media--like" data-js="addLike">${thisData.likes}<i class="fas fa-heart fontIcon"></i></p>
            </article>
        </article>` 
    
  };



  let createCounter = function (thisData){

    this.elHTML = `<div id="counterLike" class="counterLike">
                    <p class="sumLike">${thisData.countLike}<i class="fas fa-heart"></i></p>
                    <p>${thisData.price}€ / jour</>
                  </div>`

                
  }


  let createCarousel = function (thisData){

                  this.elHTML = 
                  `<div class="slider" data-js="closeCarousel" aria-hidden="true">
                    <div class="marquise">
                      <button class="sliderBox__close" data-js="closeCarousel"></button>
                      <div id="carousel" class="carousel" tabindex="0">
                        <div class="carousel__container" style="width: 0%;">`

          let limit = thisData.length
          for(var i = 0; i < limit; i++){
            

              if(thisData[i].image){

                  this.elHTML +=  `<div class="carousel__item">
                                      <figure class"figure__img">
                                          <img  src="${thisData[i].dirMedia}${thisData[i].image}" class="carousel${thisData[i].class}"/>                                                               
                                      </figure>
                                      <p>${thisData[i].alt}</p>
                                  </div>`

                              

              }else if(thisData[i].video){

                  this.elHTML += `<div class="carousel__item">
                                      <figure class="figure__video">
                                          <video controls width="100%">
                                              <source src="${thisData[i].dirMedia}${thisData[i].video}" type="video/mp4">
                                          </video>                                                               
                                      </figure>
                                      <p>${thisData[i].alt}</p>
                                  </div>`
              }        
          }

                this.elHTML += 
                        `</div>
                      </div>
                        <button class="carousel__nav carousel__prev" data-js="prevCarousel">
                          <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="carousel__nav carousel__next" data-js="nextCarousel">
                          <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                  </div>`




  }



  let createModalForm = function(){


    thisData = getData.getIdentity()


    this.elHTML = 
                `<div 
                  id="dialog"
                  role="dialog" 
                  aria-labelledby="Formulaire de contact" 
                  aria-describedby="Permet de contacter le photographe, ${thisData.name}"
                  aria-modal="true"
                  aria-hidden="true"
                  tabindex="-1" 
                  class="dialogBox"           
                  data-js="closeModal">
                
                
                    <form action="" method="post">
                      <button 
                      class="dialogBox__close"
                      type="button" 
                      aria-label="Fermer" 
                      title="Fermer cette fenêtre de contact"
                      data-js="closeModal">
                    </button>
                    <fieldset>
                        <legend id="dialog-title" aria-hidden="true">Contactez moi</legend>
                        <h1 id="dialog-desc">${thisData.name}</h1>

                        <div class="form__content">

                          <div class="brick">
                            <label for="firstname">Prénom</label>
                            <input id="firstname" type="text" name="firstname" class="brickInput" min-length="2" required/>
                          </div>

                          <div class="brick">
                            <label for="lastname">Prénom</label>
                            <input id="lastname" type="text" name="lastname" class="brickInput" />
                          </div>

                          <div class="brick">
                            <label for="email">Email</label>
                            <input  id="email" type="email" name="email" class="brickInput" />
                          </div>

                          <div class="brick">
                            <label for="message">Email</label>
                            <input  id="message" type="email" name="email" class="brickInput brickInput--textarea" />
                          </div>

                          <button type="submit" class="btn btn--modal" data-js="submitModal">Envoyer</button>

                      
                        
                        </div>


                    </fieldset>
                    </form>
                </div>` 
  }
  
  