class CreateCustomSelect {
  constructor() {
    /**
     * status : close || openList
     */

    this.elHTML = `<section class="selectFilter" aria-hidden="true">
          
            <div id="customSelect" class="customSelect selectFilter--inner" aria-hidden="true"> 
            
                <label>Trier par</label>    

                    <div class="customSelect__box">
                        <div 
                        id="otherCustomSelect"
                        class="customSelect__body" 
                        data-status="close"
                        aria-labelledby="listox-label" 
                        aria-activedescendant="customSelect--trigger"
                        aria-haspopup="listbox"
                        aria-selected="true"
                        aria-expanded="false">     

                            <button id="customSelect--trigger" class="customSelect__body--btn" data-context="noSwap"  role="option"
                            aria-labelledby="listox-label">
                                <span id="popularityBtn" class="customSelect--btn"  data-value="popularity">Popularité</span>
                                <i class="fas fa-angle-down arrowDown"></i>
                                <i class="fas fa-angle-up arrowUp"></i>
                            </button>

                            <button class="customSelect__body--btn" data-context="swap"  role="option"
                            aria-labelledby="listox-label">
                                <span id="dateBtn"       class="customSelect--btn"  data-value="date">Date</span>
                            </button>

                            <button class="customSelect__body--btn" data-context="swap"  role="option"
                            aria-labelledby="listox-label">
                                <span id="titleBtn"      class="customSelect--btn"  data-value="title">Titre</span>
                            </button>

                           

                        <div>
                    </div>
            </div>
            
        </section>`;
  }
}
