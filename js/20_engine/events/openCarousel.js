function openCarousel (target){

    console.log('carroussel');

    const factoryHtml = new htmlFactory 
    // On envoie à l'atelier qui nous retourne un objet contenant la boite modal
    // telle que construite dans le fichier designHTML/modalBox.js
    const thisHtmlObject = factoryHtml.createHtmlEl(slider,'elHtmlObject')

    let dataMedia = getData.getMedia(data,idURL)

    //Donne la valeur de la photo sur laquelle l'on as cliqué
    let item = parseInt(target.dataset.item);  
  
    
    
            //On ajoutes des entrées à data.json
            let thisData = getData.getIdentity()
            let tabName = thisData.name.split(' ');
            let name = tabName[0]            
            
            //Repertoire ou ce trouve l'image
            let entries1 ="dirMedia"
            let entries1Val = `img/${name}/`    
            //Class dedié à l'élément HTML Racine
            let entries2 = 'class'
            //Un nombre est ajouté à la fin de la class dans la boucle for
            let entries2Val = `media__${name}--`;
            
                let insertIn ='';
                console.log(dataMedia);
                console.log(dataMedia.length);
                // On ajoute Les nouvelles entrées au tableau
                for(var i = 0; i < dataMedia.length; i++){
            
                dataMedia[i][entries1] = entries1Val
                dataMedia[i][entries2] = entries2Val+i

                
                console.log(dataMedia);

                    if(dataMedia[i].image){

                        insertIn +=     `<div class="carousel__item">
                                            <figure class"figure__img">
                                                <img  src="${dataMedia[i].dirMedia}${dataMedia[i].image}" class="carousel${dataMedia[i].class}"/>                                                               
                                            </figure>
                                            <p>${dataMedia[i].alt}</p>
                                        </div>`

                    }else if(dataMedia[i].video){

                        insertIn +=     `<div class="carousel__item">
                                            <figure class="figure__video">
                                                <video controls width="100%">
                                                    <source src="${dataMedia[i].dirMedia}${dataMedia[i].video}" type="video/mp4">
                                                </video>                                                               
                                            </figure>
                                            <p>${dataMedia[i].alt}</p>
                                        </div>`


                    }
            
                }

                console.log(thisHtmlObject);

               



    document.body.appendChild(thisHtmlObject,body);
    let thisReceptor = document.querySelector('.carousel__container')                  
    thisReceptor.insertAdjacentHTML('beforeend',insertIn);

                console.log(item)
    new Carousel(document.querySelector('.carousel__container'),{
        slidesToScroll : 1,
        slidesVisible : 1,
        currentItem : item,
        loog : true
    })
}


