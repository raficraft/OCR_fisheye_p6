

function mediaFactory() {

  this.createMedia =  (dataJSON) => {

    let makeComponent =[];
    alterateMediaObject(dataJSON)

    i=0;

    dataJSON.map(function(media){  

      if(media.image)
      //On construit l'élément HTML pour les images
      makeComponent[i++] = new createImage(media,i);

      if(media.video)
      //On construit l'élément HTML pour les video
        makeComponent[i++] = new createVideo(media,i);

    })

    return makeComponent;

  }
}




//On instancie l'usine
let factory = new mediaFactory()
//On récupère les media liés à l'ID du photographe passé en URL
let medias = getData.getMediaByIdentity(data)
//On passe les média dans l'usine
let newMedia =  factory.createMedia(medias)

function renderComponent(showThis,target){
  
  showThis.map(function(media){  
    
    target.insertAdjacentHTML("afterbegin",media.elHTML)
    
  })
  
}
let targetMedia = document.querySelector('.photography');  

renderComponent(newMedia,targetMedia)


