
  let createCarousel = function (thisData){

          this.elHTML = 
          `<div class="slider" data-js="closeCarousel" aria-hidden="true" >
            <div class="marquise" >
              <button class="sliderBox__close" data-index="1" data-js="closeCarousel" aria-label="bouton de fermeture du carousel"></button>
              <div id="carousel" class="carousel" >
                <div class="carousel__container" style="width: 0%;" >`

      let limit = thisData.length
      for(var i = 0; i < limit; i++){


        if(thisData[i].image){

          this.elHTML +=  `<div class="carousel__item" >
                              <figure class"figure__img flexImg" >
                                  <img  src="${thisData[i].dirMedia}/1050/${thisData[i].image}" 
                                        class="${thisData[i].class} imgFlex"
                                        alt="${thisData[i].alt}"
                                        aria-labelledby="carousel"
                                        data-inc="${i}"
                                        />  
                                                                                                     
                                        <figcaption >${ucFirst(thisData[i].alt)}</figcaption>
                              </figure>
                          </div>`

                      

        }else if(thisData[i].video){

          this.elHTML += `<div class="carousel__item" >
                              <figure class="figure__video flexImg" >
                                  <video controls data-inc="${i}" tabindex="3">

                                      <source 
                                       src="${thisData[i].dirMedia}/video/${thisData[i].video}"
                                       class="${thisData[i].class}"
                                       type="video/mp4" 
                                       aria-label="${thisData[i].alt}"
                                       aria-labelledby="carousel"
                                       >

                                  </video>  
                                  <span class="maskVideo"></span>                                                             
                                  </figure>
                                  <figcaption >${ucFirst(thisData[i].alt)}</figcaption>
                          </div>`
        }        
      }

          this.elHTML += 
              `</div>
                </div>
                  <button class="carousel__nav carousel__prev" arial-label="image précédente" aria-labelledby="carousel" tabindex="2">
                    <i class="fas fa-chevron-left" aria-hidden="true" ></i>
                  </button>
                  <button class="carousel__nav carousel__next" arial-label="image suivante" aria-labelledby="carousel" tabindex="4">
                    <i class="fas fa-chevron-right" aria-hidden=true ></i>
                  </button>
                </div>
              </div>`

}


