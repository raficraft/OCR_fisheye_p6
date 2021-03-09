class Carousel{

  /** 
   * @param {HTMLElement} element
   * @param {object} options
   * @param {object}  [options.slidesToScroll = 1] Nombre d'éléments à faire défiler
   * @param {object}  [options.slidesVisible = 1] Nombre d'éléments visible dans le carousel
   * @param {boolean} [options.loop = false] Doit-on boculer en fin de carousel
   */

    constructor(element,options ={}){

        this.el = element;
        this.options = Object.assign({},{
            slidesToScroll : 1,
            slidesVisible :1,
            currentItem : 0,
            loop : false          
        },options), 

        this.root = document.querySelector('.carousel')
        this.root.setAttribute('tabindex', '0')
        this.root.focus()
        //Ajouter  aria-hidden au contenu du site
        this.container = document.querySelector('.carousel__container');
        this.children = [].slice.call(this.el.children)
        this.item = [].slice.call(document.querySelectorAll('.carousel__item'))

        let contentImage = document.querySelectorAll('.carousel img')
        let prevBtn = document.querySelector('.carousel__prev')
        let nextBtn = document.querySelector('.carousel__next')
        let closeBtn = document.querySelectorAll('[data-js="closeCarousel"]')


        //On empêche la fermeture du carousel si l'on clique dans une image
        let lenghtContentImage = contentImage.length
        for(let i = 0; i < lenghtContentImage; i++){
            contentImage[i].addEventListener('click', (e) => {e.stopPropagation()})
        }

        nextBtn.addEventListener('click', (e) => {e.stopPropagation(); this.next();})
        prevBtn.addEventListener('click', (e) => {e.stopPropagation(); this.prev()})

        let limitCloseBtn = closeBtn.length
        for(let i = 0; i < limitCloseBtn; i++){
            closeBtn[i].addEventListener('click',(e) => {e.stopPropagation(); this.closeCarousel()})
        }

        //Navigation au clavier

        this.root.addEventListener('keyup',e =>{

            if(e.key === 'ArrowRight' || e.key === 'Right'){
                this.next()
            }else  if(e.key === 'ArrowLeft' || e.key === 'Left'){
                this.prev()
            }

        })




        this.setStyle()         
        // Si l'item courant est passé via l'exterieur.
        // On positionne le slider sur celui-ci.
        if(options.currentItem !== 0 ){
            this.goToItem(this.options.currentItem)
        }
       
    }

    /**
     * Applique les bonnes dimensions aux éléments
     */

    setStyle(){        
        let ratio = this.children.length / this.options.slidesVisible;
        this.container.style.width =(ratio*100) +"%"
       
        let itemLength = this.item.length
        for(let i = 0; i < itemLength; i++){
            this.item[i].style.width = ((100/ this.options.slidesVisible) / ratio) +"%"
        }
    }

    next(){      
        this.goToItem(this.options.currentItem + this.options.slidesToScroll)
    }
    prev(){  
        this.goToItem(this.options.currentItem - this.options.slidesToScroll)
    }

    closeCarousel(){                
        restoreScrollBar()
        document.querySelector('.slider').setAttribute('aria-hidden', true);
        document.querySelector('#main').setAttribute('aria-hidden', false)
    }

    /**
     * Deplace le carousel vers l'élément ciblé
     * @param {number} index 
     */

    goToItem(index){
        if(index < 0){
            index = this.item.length - this.options.slidesVisible
        }else if(index >= this.item.length || this.item[this.currentItem + this.options.slidesVisible] === 'undefined'){
            index = 0
        }

        let translateX = index * (-100 / this.item.length)
        this.container.style.transform = 'translate3d('+translateX+'%,0,0)'
        this.options.currentItem = index
      
    }



    
    

}



