class createHeader{

  constructor(){
    this.elHTML = `<div class="header__wrapper">                    
              <div class="header__logo">
              <a href="index.html" alt="Fisheye Home page" aria-current="page">
                  <img src="img/logo/fisheye.png" alt="Logo du site de photographe Fisheye, bienvenue sur la page d'acceuil.">                            
              </a>
              </div>`;
    if (browserInfo.request.idURL === false) {
      this.elHTML += `<nav class="nav nav__filter" role="naviagation">
              <span><a href="index.html?tags=portrait" data-js="sortByTag">#Portrait</a></span>
              <span><a href="index.html?tags=art" data-js="sortByTag">#Art</a></span>
              <span><a href="index.html?tags=fashion" data-js="sortByTag">#Fashion</a></span>
              <span><a href="index.html?tags=architecture" data-js="sortByTag">#Architecture</a></span>
              <span><a href="index.html?tags=travel" data-js="sortByTag">#Travel</a></span>
              <span><a href="index.html?tags=sport" data-js="sortByTag">#Sport</a></span>
              <span><a href="index.html?tags=animals" data-js="sortByTag">#Animals</a></span>
              <span><a href="index.html?tags=events" data-js="sortByTag">#Events</a></span>
              </nav>
              <h1 class="header_tittle">Nos photographes</h1>`;
    }

    this.elHTML += `</div>`;
  }

};
