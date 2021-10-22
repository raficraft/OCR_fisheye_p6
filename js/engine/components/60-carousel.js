class createCarousel {
  constructor(thisData) {
    if (document.querySelector(".slider")) {
      document.querySelector(".slider").remove();
    }

    sortDataMedia(localStorage.getItem("sortDataMedia"));

    this.elHTML = `<div class="slider" data-js="closeCarousel" aria-hidden="true" >
                <div class="marquise" >
                  <button class="sliderBox__close" data-index="1" data-js="closeCarousel" aria-label="bouton de fermeture du carousel"></button>
                  <button class="carousel__nav carousel__prev" arial-label="image précédente" >
                      <i class="fas fa-chevron-left"  arial-label="image précédente"></i>
                  </button>
                  <button class="carousel__nav carousel__next" arial-label="image suivante">
                    <i class="fas fa-chevron-right" arial-label="image suivante"></i>
                  </button>
                  <div id="carousel" class="carousel" >
                    <div class="carousel__container">`;

    let limit = thisData.length;
    for (var i = 0; i < limit; i++) {
      let currentData = thisData[i];
      if (currentData.image) {
        this.elHTML += `<div class="carousel__item" >
                          <figure class"figure__img flexImg" >
                              <img  src="${currentData.dirMedia}/1050/${
          currentData.image
        }" 
                                    class="${currentData.class} imgFlex"
                                    alt="${currentData.alt}"
                                    aria-labelledby="carousel"
                                    data-inc="${i}"
                                    />  
                                                                                                
                                    <figcaption >${ucFirst(
                                      currentData.alt
                                    )}</figcaption>
                          </figure>
                        </div>`;
      } else if (currentData.video) {
        this.elHTML += `<div class="carousel__item" >
                            <figure class="figure__video flexImg" >
                                <video controls data-inc="${i}" tabindex="3">
                                    <source 
                                    src="${currentData.dirMedia}/video/${
          currentData.video
        }"
                                    class="${currentData.class}"
                                    type="video/mp4" 
                                    aria-label="${currentData.alt}"
                                    aria-labelledby="carousel"
                                    >
                                </video>  
                                <span class="maskVideo"></span>                                                             
                            </figure>
                                <figcaption >${ucFirst(
                                  currentData.alt
                                )}</figcaption>
                        </div>`;
      }
    }

    this.elHTML += `</div>
                    </div>                   
                    </div>
                  </div>`;
  }
}
