

function mediaFactory() {
    this.createWorkShop = function (data,method) {
  
  
        return makeMedia;
    }
  }
  
  
  
  //Creation du bloc HTML pour les Images
  // La fonction est appellée par l'usine
  
  let createImage = function (thisData) {
    this.elHTML = `<article class="sticker__media sticker__media--img ${thisData.class}">
                        <header class="flexImg">     
                            <img class="imgFlex" src="${thisData.dirMedia}${thisData.image}"/>
                        </header>
                        <article>   
                          <p>${thisData.alt}</p>
                          <p>${thisData.price}€</p>
                          <p>${thisData.likes}</p>
                        </article>
                  </article>`   
    
  };
  
  
  
  //Creation du bloc HTML pour les Videos
  // La fonction est appellée par l'usine
  let createVideo = function (thisData) {
    this.elHTML =  `<article class="sticker__media sticker__media--video ${thisData.class}">
                        <header class="flexImg">
                            <video class="imgFlex" controls width="100%">
                            <source src="${thisData.dirMedia}${thisData.video}" type="video/mp4"></video>
                        </header>
                        <article>   
                          <p>${thisData.alt}</p>
                          <p>${thisData.price}€</p>
                          <p>${thisData.likes}</p>
                        </article>
                    </article>` 
    
  };
  
  //On instancie l'usine
  let factory = new mediaFactory()
  //On récupère les media liés à l'ID du photographe passé en URL
  let medias = getData.getMedia(data,idURL)
  //On passe les média dans l'usine
  let newMedia =  factory.createMedia(medias)
  
  function showMedia(showThis){
    
    let showElHtml = ""
    
    showThis.map(function(media){  
      
      showElHtml += media.elHTML
      
    })
    
    let mediaContainer = document.getElementById("photography");
    
    mediaContainer.innerHTML = showElHtml;
    
  }
  
  showMedia(newMedia)
  
  
  