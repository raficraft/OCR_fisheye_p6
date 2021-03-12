let openCarousel = (target)=>{

    showCarousel()

    let item = parseInt(target.dataset.item);   
    
    console.log(item);

    document.querySelector('.slider').setAttribute('aria-hidden', false);                    
    document.querySelector('#main').setAttribute('aria-hidden', true);
    document.querySelector('.carousel__next').focus()
   // hiddenScrollBar()

  

    new Carousel(document.querySelector('.carousel__container'),{
        slidesToScroll : 1,
        slidesVisible : 1,
        currentItem : item,
        loog : true
    })

   
   
}