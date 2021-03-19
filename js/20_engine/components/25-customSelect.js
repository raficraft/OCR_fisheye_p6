let createCustomElement = function(thisData){

this.elHTML = 

    `<div  class="selectFilter" aria-hidden="true">
        <div class="selectFilter--inner" aria-hidden="true">
        
        <label id="listox-label" for="custom-select">Trier Par</label>
        
        <div class="customSelect__wrapper" role="listbox" 
        aria-labelledby="listox-label">
            <div class="custom-select"
                aria-labelledby="listox-label" 
                aria-activedescendant="listbox1-1"
                aria-haspopup="listbox"
                aria-selected="true"
                aria-expanded="false">

            <button id="customSelect--trigger" class="customSelect--trigger"
                    role="option"
                    aria-labelledby="listox-label">
                    <span >Popularité</span>
                <div class="arrow"></div>
            </button>

            <div class="customOptions" aria-hidden="true">
                <button id="customOption1" class="customOption selected customHidden"
                        data-value="popularity" data-js='sortMedia' role="option"
                        aria-labelledby="listox-label">
                        <span>Popularité</span>
                </button>

                <button id="customOption2" class="customOption" 
                        data-value="date" data-js='sortMedia' role="option"
                        aria-labelledby="listox-label">
                        <span>Date</span>
                </button>

                <button id="customOption3" class="customOption" 
                        data-value="title" data-js='sortMedia' role="option"
                        aria-labelledby="listox-label">
                        <span>Titre</span>
                </button>

            </div>
            </div>
        </div>   
        
        </div>
    </div>`


return this.elHTML;

}




