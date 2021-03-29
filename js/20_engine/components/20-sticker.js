class createSticker {


  constructor(thisData){


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
      this.elHTML += `<p class="identity flexImg"><img class="identity__img imgFlex" src="img/Photographers_photo/${data.portrait}"
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
}


}