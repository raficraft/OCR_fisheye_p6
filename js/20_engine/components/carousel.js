
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
                        <figure class"figure__img flexImg">
                            <img  src="${thisData[i].dirMedia}/1050/${thisData[i].image}" 
                                  class="carousel${thisData[i].class} imgFlex" alt="${thisData[i].alt}" aria-labelledby="carousel"/>                                                               
                                  <figcaption>${thisData[i].alt}</figcaption>
                        </figure>
                    </div>`

                

}else if(thisData[i].video){

    this.elHTML += `<div class="carousel__item">
                        <figure class="figure__video flexImg">
                            <video controls>
                                <source src="${thisData[i].dirMedia}/video/${thisData[i].video}" type="video/mp4" aria-label="${thisData[i].alt}" aria-labelledby="carousel">
                            </video>                                                               
                            </figure>
                            <figcaption>${thisData[i].alt}</figcaption>
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





/**
 * 
 * /**
 *  Source Externe [https://andrejgajdos.com/custom-select-dropdown/]
 *  Custom_select adapté au besoin du projet.
 * 
 */

/*

class CustomSelect{

    constructor(element){

        this.el = document.querySelector('.customSelect__wrapper')        
        this.customOption =  document.querySelectorAll(".customOption")
        this.selectBody = document.querySelector('.custom-select');

        this.el.addEventListener('click', () => { this.openCustomSelect(this.selectBody) })
        for (const option of this.customOption) {
            option.addEventListener('click',  () => {   this.swapOption(option)})
        }
        window.addEventListener('click', (e) => { this.closCustomSelect(e)});
    }



    swapOption(option){
        console.log(option);
        document.querySelector('.customHidden').classList.remove('customHidden');                
        if (!option.classList.contains('selected')) {
            option.parentNode.querySelector('.customOption.selected').classList.remove('selected');
            option.classList.add('selected','customHidden');
            option.closest('.custom-select').querySelector('.customSelect--trigger span').textContent = option.textContent;
        }
    }

    openCustomSelect(el){       
        el.classList.toggle('open');
        toggleAttribute(el,'aria-expanded','false','true') 
    }

    closCustomSelect(e){
        const select = document.querySelector('.custom-select')
        if (!select.contains(e.target)) {
            select.classList.remove('open');
            toggleAttribute(select,'aria-expanded','false','true')
        }
    }

    
   
}


new CustomSelect()
      


 * 
 */

