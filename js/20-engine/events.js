
console.error('Page des évenements');


document.addEventListener('click',function(e){   

    // Gestion des événement filtrer avec l'attribut data-js présent sur l'élément clické
    // La valeur de l'attribut indique qu'elle action effectué

   

    if(e.target.dataset){
     
        let el = e.target;
        let action = el.dataset.js;
        let factoryHtml = new htmlFactory 

       // console.log(action);
        switch(action){

            case 'openFormContact' :

                e.preventDefault();

                console.log('apelle de la modalBox'); 

                 
            
                // La condition empêche l'affichage de plusieurs boite modal
                if(!document.querySelector('#formContact')){

                    // On envoie à l'atelier qui nous retourne un objet contenant la boite modal
                    // telle que construite dans le fichier designHTML/modalBox.js

                    let thisHtmlObject = factoryHtml.createHtmlEl(modalBox,'elHtmlObject')

                    //On récupère l'identités liés à l'id passé en url        
                    let identity = getData.getIdentity(data,idURL)            

                    // On ajoute le nom du photographe de manière dynamique avant insertion ^^
                    thisHtmlObject.querySelector('#titleContact').textContent = identity.name;

                    document.body.appendChild(thisHtmlObject,body);


                }else{

                    // on remet l'attribut open sur la modalBox
                    let contactForm = document.querySelector('#formContact');
                    contactForm.setAttribute('open' , 'open');
                }
            break;

            case "openCaroussel" : 


                console.log('carroussel');

                    // On envoie à l'atelier qui nous retourne un objet contenant la boite modal
                    // telle que construite dans le fichier designHTML/modalBox.js

                    let thisHtmlObject = factoryHtml.createHtmlEl(slider,'elHtmlObject')

                    let dataMedia = getData.getMedia(data,idURL)

                    let item = parseInt(el.dataset.item);

                

                    console.error(item)
                  
                    
                    
                            //On ajoutes des entrées au tableau passés en argument
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

                                

                                    if(dataMedia[i].image){

                                        insertIn +=     `<div class="carousel__item">
                                                            <figure>
                                                                <img  src="${dataMedia[i].dirMedia}${dataMedia[i].image}" />
                                                                <figcaption>${dataMedia[i].alt}</figcaption>
                                                            </figure>
                                                        </div>`

                                    }else if(dataMedia[i].video){

                                        insertIn +=     `<div class="carousel__item">
                                                            <figure>
                                                                <video controls width="100%">
                                                                    <source src="${dataMedia[i].dirMedia}${dataMedia[i].video}" type="video/mp4">
                                                                </video>
                                                                <figcaption>${dataMedia[i].alt}</figcaption>
                                                            </figure>
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




            break;
        

        }

    }
  
 });

