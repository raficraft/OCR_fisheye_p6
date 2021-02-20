

function mediaFactory() {
  this.createMedia = function (dataMedia) {
    let makeMedia =[];

    //On ajoutes des entrées au tableau passés en argument
    let thisData = getData.getIdentity()
    let tabName = thisData.name.split(' ');
    let name = tabName[0]
    
    
    //Repertoire ou ce trouve l'image
    let entries1 ="dirMedia"
    let entries1Val = `img/${name}/`    
    //Class dedié à l'élément HTML Racine
    let entries2 = 'class'
    //Un nombre est ajouté à la fin de la class dans la boucle for
    let entries2Val = `media__${name}--`;
    
    
        // On ajoute Les nouvelles entrées au tableau
        for(var i = 0; i < dataMedia.length; i++){
    
          dataMedia[i][entries1] = entries1Val
          dataMedia[i][entries2] = entries2Val+i
    
        }


    i=0;
    console.log(dataMedia)

    dataMedia.map(function(media){  

      if(media.image)
      //On construit l'élément HTML pour les images
      makeMedia[i++] = new createImage(media);

      if(media.video)

      //On construit l'élément HTML pour les video
       makeMedia[i++] = new createVideo(media);
    })

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


