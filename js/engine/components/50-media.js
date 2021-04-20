class createMedia {

  constructor(thisData){


      alterateMediaObject(thisData); //NB ecrire la doc dans tools

      this.elHTML = `<section id="photography" class="photography" data-spy>`;
      thisData.forEach((media, key) => {

        let thisClass= ''

        if(media.video){
          thisClass = "sticker__media--video"
        }else{
          thisClass = "sticker__media--img"
        }



        this.elHTML += `
        <article class="sticker__media ${thisClass}" >             
                          <a href="#" class="flexImg"  data-js="openCarousel" data-item="${key}">`;

        if (media.image) {
          //On construit l'élément HTML pour les images
          this.elHTML += `<img class="imgFlex ${media.class}" src="${
            media.dirMedia
          }/300/${media.image}" 
          data-js="openCarousel" data-item="${key}"                        
                alt="Cette photo ce nomme ${ucFirst(
                  media.alt
                )}                        
                a un prix de ${media.price} euro et a actuellement eu ${
            media.likes
          } mentions j'aime.Lien ouvrant le carousel "/> `;
        }

        if (media.video) {
          //On construit l'élément HTML pour les video
          this.elHTML += `<video class="imgFlex ${
            media.class
          }"  data-js="openCarousel" data-item="${key}" preload>
                      <source src="${media.dirMedia}/video/${
            media.video
          }" type="video/mp4"></video>              
                  <span class="sr__only">Cette vidéo ce nomme ${ucFirst(media.alt)},
                  a un prix de ${media.price} euro et a actuellement eu ${
            media.likes
          } mentions j'aime.Lien ouvrant le carousel </span>`;
        }

        this.elHTML += `   </a>
      <article class="sticker__media--info">   
        <h2 class="sticker__media--title" aria-hidden="true">${ucFirst(
          media.alt
        )}</h2>
        <p class="sticker__media--price"  aria-hidden="true">${media.price} €</p>
        <p class="sticker__media--like" data-js="addLike" data-status="true">${media.likes}
        <i class="fas fa-heart fontIcon" aria-hidden="true"></i></p>
        <span class="sr__only">Bouton vous permettant d'ajouter une mention j'aime</span>  
    </article>
    </article>`;
      });

      this.elHTML += `</section>`;
   
}



 
};
