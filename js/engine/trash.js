

        this.elHTML =  
        `<section class="selectFilter" aria-hidden="true">
          
            <div id="customSelect" class="customSelect selectFilter--inner" aria-hidden="true"> 
            
                <label>Trier par</label>    

                    <div class="customSelect__box">
                        <div 
                        id="otherCustomSelect"
                        class="customSelect__body" 
                        data-status="close"
                        aria-labelledby="listox-label" 
                        aria-activedescendant="listbox1-1"
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
            
        </section>` 


































/*

  if (!thisData.length) {
    let tmpData = [];
    tmpData.push(thisData);
    console.log(tmpData);
    thisData = tmpData;
  }
  this.elHTML = "";

  thisData.forEach((data, key) => {
    console.log(data);
    this.elHTML += `<article class="sticker">
                <header>`;

    if (browserInfo.request.idURL === false) {
      this.elHTML += `<a class="identity" href="index.html?id=${data.id}" >
                                        <p class=" flexImg">
                                        <img class="identity__img imgFlex" src="img/Photographers_photo/${data.portrait}"
                                        alt="Photographe affilié au site Fisheye : ${data.name}"  /></p>
                                         <span><h2>${data.name}</h2></span>
                       </a>`;
    } else {
      this.elHTML += `<p class="identity flexImg">
                            <img class="identity__img imgFlex" src="img/Photographers_photo/${data.portrait}"
                                alt="Photographe affilié au site Fisheye : ${data.name}"  /></p>`;
    }

    this.elHTML += `</header>
                        <button class="btn btn--highRes" type="button"  data-js="openFormContact" 
                                aria-labeledby="Ouvre le formulaire de contact" 
                                aria-haspopup="dialog"
                                aria-controls="dialog">
                                Contactez-moi
                        </button>
                        <article class="sticker__info">`;

    if (browserInfo.request.idURL !== false) {
      this.elHTML += ` <h1>${data.name}</h1>`;
    }

    this.elHTML += `<p class="info__city">${data.city}, ${data.country}</p>
                        <p class="info__tagline">${data.tagline}</p>
                        <p class="info__price">${data.price}€/jour</p>                       
                        <footer class="nav nav__filter">`;

    data.tags.forEach((tag) => {
      this.elHTML += `<span class="filter"><a href="index.html?tags=${tag}">#${ucFirst(
        tag
      )}</a></span>`;
    });
    this.elHTML += `</footer></article></article>`;
  });




/*
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

*/

  //Header
  /*
  this.elHTML = document.createElement('div')
  this.elHTML.setAttribute('class' , 'header__wrapper')

    //content Div .header__logo > a.header__logo > img
    const divLogo = document.createElement('div')
    divLogo.setAttribute('class' , 'header__logo')
    const link_divLogo = document.createElement('a')
    setAttributes(link_divLogo,
      {
        'href' : 'index.html',
        'alt': 'Fisheye Home page',
        'aria-current' : 'page'
      })
    const imgLogo = document.createElement('img')
    setAttributes(imgLogo,
      {
        'src' :"img/logo/fisheye.png",
        'alt' : "Logo du site de photographe Fisheye, bienvenue sur la page d'acceuil."

      })
    link_divLogo.appendChild(imgLogo)
    divLogo.insertAdjacentElement('afterbegin',link_divLogo)

    //Content Nav

    const nav = document.createElement('nav')
    setAttributes(nav,{'class' : 'nav nav__filter', 'role' : 'navigation' })
    const spanArray = [ 'portrait','art','fashion','architecture','travel','sport','animals','events']

    spanArray.forEach(element => {

      const span  = document.createElement('span')
      const linkSpan = document.createElement('a')
      setAttributes(linkSpan,{'href' : `index.html?tags${element}`, 'data-js' : 'sortByTag'})
      linkSpan.textContent = `#${ucFirst(element)}`
      span.insertAdjacentElement('afterbegin',linkSpan)
      nav.insertAdjacentElement('beforeend',span)
      
    });


    this.elHTML.insertAdjacentElement('afterbegin',divLogo)
    
    if (browserInfo.request.idURL === false) {
      
      this.elHTML.insertAdjacentElement('beforeend',nav)
    }
    console.log(this.elHTML);


 */

    /**
     * 
     * class createHeader{

  constructor(){   
        
    //On construit le parent Primaire 
    const headerArray  = 
    [{
        html : {tag: 'div'},
        attr : {'class' : 'header__wrapper'},
          child : [
          {
            html : {tag : 'a'},
            attr : {'class' : 'header__logo'}
          },
          {
            html : {tag : 'img'},
            attr : {'href' : 'index.html', 'alt' : 'alt="Fisheye Home page" aria-current="page"'}
          },
          {
            html : {tag : 'div'},
            attr : {'class' :  'nav nav__filter', 'aria-role' : 'navigation'}
          }
        ]   
    }]

    const header =  new workShopHtmlObject(headerArray)

    //On construit La navigation

    if (browserInfo.request.idURL === false){
      const spanValueArray = [ 'portrait','art','fashion','architecture','travel','sport','animals','events']
      spanValueArray.forEach(element => {
        const spanArray = 
        [{
            html : {tag : 'span'},
            child : [
              {
                html : {tag : 'a'},
                attr : {'href' :  `index.html?tags=${element}`, 'aria-role' : 'navigation'},
                textContent :  {text : `#${ucFirst(element)}`}
              }
            ]
        }]

        const span =  new workShopHtmlObject(spanArray)
        
        const navTarget = header.querySelector('.nav')
        navTarget.insertAdjacentElement('beforeEnd', span)  
      });
    }  

    this.elHTML = header
    console.log(header); 
 
  }
};

     */
