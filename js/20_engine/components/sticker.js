let createSticker = function(thisData){

  let path = browserInfo.path


        this.elHTML =
        `<article class="sticker">
                <header>`

                if(browserInfo.request.idURL === false){
                this.elHTML  +=`<a class="identity" href="gallery.html?id=${thisData.id}" >
                                        <p class=" flexImg">
                                        <img class="identity__img imgFlex" src="img/Photographers_photo/${thisData.portrait}"
                                        alt="Photographe affilié au site Fisheye : ${thisData.name}"  /></p>
                                         <span><h2>${thisData.name}</h2></span>
                                </a>`
                }else{
                this.elHTML+= `<p class="identity flexImg"><img class="identity__img imgFlex" src="img/Photographers_photo/${thisData.portrait}"
                                alt="Photographe affilié au site Fisheye : ${thisData.name}"  /></p>`

                }

                this.elHTML+= `</header>
                                        <button class="btn btn--highRes" type="button"  data-js="openFormContact" 
                                                aria-labeledby="Ouvre le formulaire de contact" 
                                                aria-haspopup="dialog"
                                                aria-controls="dialog">
                                                Contactez-moi
                                        </button>
                                <article class="sticker__info">`   
            
            
                if(browserInfo.request.idURL !== false){
                this.elHTML += ` <h1>${thisData.name}</h1>`
                }


                this.elHTML += `<p class="info__city">${thisData.city}, ${thisData.country}</p>
                                <p class="info__tagline">${thisData.tagline}</p>
                                <p class="info__price">${thisData.price}€/jour</p>                       
                                <footer class="nav nav__filter">`

                thisData.tags.forEach(tag =>{    
                        this.elHTML +=  
                                        `<span class="filter"><a href="index.html?tags=${tag}">#${tag}</a></span>`    
                }) 
                this.elHTML += 
                                `</footer>
                        </article>
                </article>` 
}
