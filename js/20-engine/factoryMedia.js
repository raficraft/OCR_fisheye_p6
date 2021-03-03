

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
    
    let limit = dataMedia.length
        // On ajoute Les nouvelles entrées au tableau
        for(var i = 0; i < limit; i++){
    
          dataMedia[i][entries1] = entries1Val
          dataMedia[i][entries2] = entries2Val+i
    
        }


    i=0;
    console.log(dataMedia)

    dataMedia.map(function(media){  

      if(media.image)
      //On construit l'élément HTML pour les images
      makeMedia[i++] = new createImage(media,i);

      if(media.video)

      //On construit l'élément HTML pour les video
       makeMedia[i++] = new createVideo(media,i);
    })

      return makeMedia;
  }
}



//Creation du bloc HTML pour les Images
// La fonction est appellée par l'usine

let createImage = function (thisData,inc,) {


  this.elHTML = 

      `<article class="sticker__media sticker__media--img ${thisData.class} "> 
            <header >     
                <a href="#">
                  <p class="flexImg"><img class="imgFlex" src="${thisData.dirMedia}${thisData.image}" data-js="openCaroussel" data-item="${inc}"/></p>
                </a>
            </header>
            <article class="sticker__media--info">   
              <p class="sticker__media--title">${thisData.alt}</p>
              <p class="sticker__media--price">${thisData.price} €</p>
              <p class="sticker__media--like">${thisData.likes}<i class="fas fa-heart fontIcon"></i></p>
            </article>
      </article>`   
  
};



//Creation du bloc HTML pour les Videos
// La fonction est appellée par l'usine
let createVideo = function (thisData,inc) {

  this.elHTML =  

      `<article class="sticker__media sticker__media--video ${thisData.class}">
          <header>
            <a href="#" class="flexImg">
                <video class="imgFlex" width="100%" data-js="openCaroussel" data-item="${inc}">
                <source src="${thisData.dirMedia}${thisData.video}" type="video/mp4"></video>
            </a>
          </header>
          <article class="sticker__media--info">   
            <p class="sticker__media--title">${thisData.alt}</p>
            <p class="sticker__media--price">${thisData.price} €</p>
            <p class="sticker__media--like">${thisData.likes}<i class="fas fa-heart fontIcon"></i></p>
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

  console.log(showThis);


  let i = 0;
  showThis.map(function(media){  

 

    
    showElHtml += media.elHTML
    i++;
    
  })
  
  let mediaContainer = document.getElementById("photography"); 
  
  console.log(mediaContainer.length);

  mediaContainer.innerHTML = showElHtml;
  
}

showMedia(newMedia)


