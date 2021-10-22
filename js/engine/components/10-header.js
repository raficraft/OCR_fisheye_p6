class createHeader {
  constructor() {
    this.elHTML = `<div class="header__wrapper" role="banner">                    
              <div class="header__logo">
              <a href="index.html" alt="Fisheye Home page" aria-current="page">
                  <img src="img/logo/fisheye.png" alt="Logo du site de photographe Fisheye.Lien menant à la page d'accueil.">                            
              </a>
              </div>`;
    if (browserInfo.request.idURL === false) {
      this.elHTML += `<nav class="nav nav__filter" role="navigation">              
              <span><a href="index.html?tags=portrait" data-js="sortByTag" title="Filtrer les photographes avec le tag portrait">Portrait</a></span>
              <span><a href="index.html?tags=art" data-js="sortByTag" title="Filtrer les photographes avec le tag Art">Art</a></span>
              <span><a href="index.html?tags=fashion" data-js="sortByTag" title="Filtrer les photographes avec le tag Fashion">Fashion</a></span>
              <span><a href="index.html?tags=architecture" data-js="sortByTag" title="Filtrer les photographes avec le tag Architecture">Architecture</a></span>
              <span><a href="index.html?tags=travel" data-js="sortByTag" title="Filtrer les photographes avec le tag Travel">Travel</a></span>
              <span><a href="index.html?tags=sport" data-js="sortByTag" title="Filtrer les photographes avec le tag Sport">Sport</a></span>
              <span><a href="index.html?tags=animals" data-js="sortByTag" title="Filtrer les photographes avec le tag Animals">Animals</a></span>
              <span><a href="index.html?tags=events" data-js="sortByTag" title="Filtrer les photographes avec le tag Events">Events</a></span>
              </nav>
              <h1 class="header_tittle">Nos photographes</h1>`;
    }

    this.elHTML += `</div>`;
  }
}
