

//Constructeur d'etiquette  
let createSticker = function(thisData){
  
    this.elHTML =
        `<article class="sticker">
            <header>
                <a class="identity flexImg" href="gallery.html?id=${thisData.id}" alt="${thisData.name}">
                <img class="identity__img imgFlex" src="img/Photographers_photo/${thisData.portrait}" height="100px"/>
                </a>
            </header>
            <button class="btn btn--highRes" type="button"  data-js="openFormContact">Contactez-moi</button>
            <article class="sticker__info">                        
                <h2>${thisData.name}</h2>
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
                    <p class="flexImg"><img class="imgFlex ${thisData.class}" src="${thisData.dirMedia}${thisData.image}" data-js="openCarousel" data-item="${inc}"/></p>
                  </a>
              </header>
              <article class="sticker__media--info">   
                <p class="sticker__media--title">${ucfirst(thisData.alt)}</p>
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
              <p class="sticker__media--title">${ucfirst(thisData.alt)}</p>
              <p class="sticker__media--price">${thisData.price} €</p>
              <p class="sticker__media--like" data-js="addLike">${thisData.likes}<i class="fas fa-heart fontIcon"></i></p>
            </article>
        </article>` 
    
  };



  let createCounter = function (thisData){


    this.elHTML = `<div id="counterLike" class="counterLike">
                    <p class="sumLike">${thisData.countLike}<i class="fas fa-heart"></i></p>
                    <p>${thisData.price}€ / jour</p>
                  </div>`
                
  }
  
  