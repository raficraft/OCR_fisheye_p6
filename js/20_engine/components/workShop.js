//Constructeur d'etiquette  
let createSticker = function(thisData){

  console.log(browserInfo.path);

  let tagTitle = 'h1';  let tabIndexExclude = 'tabindex="-1"'
  if(browserInfo.path === 'index' ){
     tagTitle = 'h2' 
  }
    this.elHTML =
        `<article class="sticker">
            <header>`
            if(browserInfo.path === 'index'){
              console.log('ouais choupette');
    this.elHTML +=  `<a class="identity flexImg" href="gallery.html?id=${thisData.id}" ${tabIndexExclude}>
                        <img class="identity__img imgFlex" src="img/Photographers_photo/${thisData.portrait}"
                          alt="Photographe affilié au site Fisheye : ${thisData.name}" ${tabIndexExclude} />
                   </a>`
            }else if(browserInfo.path === 'gallery'){
    this.elHTML +=  `<p class="identity flexImg">
                    <img class="identity__img imgFlex" src="img/Photographers_photo/${thisData.portrait}"
                          alt="Photographe affilié au site Fisheye : ${thisData.name}" ${tabIndexExclude} />
                  </p>`          

            }
    this.elHTML +=   `</header>
                        <button class="btn btn--highRes" type="button"  data-js="openFormContact"                   
                                aria-label="contact"
                                aria-haspopup="dialog"
                                aria-controls="dialog">
                                Contactez-moi
                        </button>
                        <article class="sticker__info">                        
                            <${tagTitle}>${thisData.name}</${tagTitle}>
                            <p class="info__city">${thisData.city}, ${thisData.country}</p>
                            <p class="info__tagline">${thisData.tagline}</p>
                            <p class="info__price">${thisData.price}€/jour</p>                       
                            <footer class="nav nav__filter" aria-label="navigation par filtre">`

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
  
        `<article class="sticker__media sticker__media--img" tabindex="3"> 
              <header > 
                    <p class="flexImg">
                      <img class="imgFlex ${thisData.class}" src="${thisData.dirMedia}${thisData.image}"
                           data-js="openCarousel" data-item="${inc}" alt="${ucfirst(thisData.alt)}"/>
                    </p>
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
              <p class="flexImg">
                  <video class="imgFlex ${thisData.class}" width="100%" data-js="openCarousel" data-item="${inc}">
                  <source src="${thisData.dirMedia}${thisData.video}" type="video/mp4"></video>
              </p>
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
                    <p class="sumLike" aria-label="likes">${thisData.countLike}<i class="fas fa-heart"></i></p>
                    <p>${thisData.price}€ / jour</>
                  </div>`

                
  }


  let createCarousel = function (thisData){

                  this.elHTML = 
                  `<div class="slider" data-js="closeCarousel" aria-hidden="true">
                    <div class="marquise">
                      <button class="sliderBox__close" data-js="closeCarousel" aria-label="bouton de fermeture du carousel"></button>
                      <div id="carousel" class="carousel" tabindex="0">
                        <div class="carousel__container" style="width: 0%;">`

          let limit = thisData.length
          for(var i = 0; i < limit; i++){
            

              if(thisData[i].image){

                  this.elHTML +=  `<div class="carousel__item">
                                      <figure class"figure__img">
                                          <img  src="${thisData[i].dirMedia}${thisData[i].image}" class="carousel${thisData[i].class}" alt="${thisData[i].alt}" aria-labelledby="carousel"/>                                                               
                                      </figure>
                                      <p>${thisData[i].alt}</p>
                                  </div>`

                              

              }else if(thisData[i].video){

                  this.elHTML += `<div class="carousel__item">
                                      <figure class="figure__video">
                                          <video controls autoplay="false">
                                              <source src="${thisData[i].dirMedia}${thisData[i].video}" type="video/mp4" aria-label="${thisData[i].alt}" aria-labelledby="carousel">
                                          </video>                                                               
                                      </figure>
                                      <p>${thisData[i].alt}</p>
                                  </div>`
              }        
          }

                this.elHTML += 
                    `</div>
                      </div>
                        <button class="carousel__nav carousel__prev" data-js="prevCarousel" arial-label="image précédente" aria-labelledby="carousel">
                          <i class="fas fa-chevron-left" aria-hidden="true"></i>
                        </button>
                        <button class="carousel__nav carousel__next" data-js="nextCarousel" arial-label="image suivante" aria-labelledby="carousel">
                          <i class="fas fa-chevron-right" aria-hidden=true></i>
                        </button>
                      </div>
                    </div>`




  }



  let createModalForm = function(){


    thisData = GetData.getIdentity()


    this.elHTML = 
                `<div 
                  id="dialog"
                  role="dialog" 
                  aria-modal="false"
                  aria-hidden="true"
                  tabindex="-1" 
                  class="dialogBox"           
                  data-js="closeModal">
                
                
                    <form action="" method="post">
                      <button 
                      class="dialogBox__close"
                      type="button" 
                      aria-label="Fermer le formulaire" 
                      title="Fermer cette fenêtre de contact"
                      data-js="closeModal">
                    </button>
                    <fieldset>
                        <legend id="dialog-title" >Contactez moi</legend>
                        <h1 id="dialog-desc">${thisData.name}</h1>

                        <div class="form__content">

                          <div class="brick">
                            <label for="firstname">nom</label>
                            <input id="firstname" type="text" name="firstname" class="brickInput" min-length="2" required/>
                          </div>

                          <div class="brick">
                            <label for="lastname">Prénom</label>
                            <input id="lastname" type="text" name="lastname" class="brickInput"/>
                          </div>

                          <div class="brick">
                            <label for="email">Email</label>
                            <input  id="email" type="email" name="email" class="brickInput"/>
                          </div>

                          <div class="brick">
                            <label for="message">Message</label>
                            <textarea  id="message" type="email" name="email" class="brickInput brickInput--textarea"></textarea>
                          </div>

                          <button type="submit" class="btn btn--modal" data-js="submitModal" aria-label="soumettre">Envoyer</button>

                      
                        
                        </div>


                    </fieldset>
                    </form>
                </div>` 
  }
  
  