/**
 *  Carousel conçu à partir du tuto suivant [https://grafikart.fr/tutoriels/carrousel-javascript-87]
 */

class Carousel{

  /** 
   * @param {HTMLElement} element
   * @param {object} options
   * @param {object}  [options.slidesToScroll = 1] Nombre d'éléments à faire défiler
   * @param {object}  [options.slidesVisible = 1] Nombre d'éléments visible dans le carousel
   * @param {boolean} [options.loop = false] Doit-on basculer en fin de carousel
   */

    constructor(element,options ={}){

        this.el = element;
        this.options = Object.assign({},{
            slidesToScroll : 1,
            slidesVisible :1,
            currentItem : 0,
            loop : false,
            imgView : '',
        },options),
        this.btn = {
            cross : document.querySelector('.sliderBox__close'),
            prev : document.querySelector('.carousel__prev'),
            next : document.querySelector('.carousel__next'),
        }  


        this.root = document.querySelector('.carousel')
        //Ajouter  aria-hidden au contenu du site
        this.container = document.querySelector('.carousel__container');
        this.children = [].slice.call(this.el.children)
        this.item = [].slice.call(document.querySelectorAll('.carousel__item'))

        const content = document.querySelectorAll('.marquise')
        const closeBtn = document.querySelectorAll('[data-js="closeCarousel"]')

        this.setStyle()         
        
        //On empêche la fermeture du carousel si l'on clique dans une image 
        content.forEach((btn) => btn.addEventListener('click', (e) => {
            e.stopPropagation()
        })) 
        
        this.btn.next.addEventListener('click', (e) => {e.stopPropagation(); this.next();})
        this.btn.prev.addEventListener('click', (e) => {e.stopPropagation(); this.prev();}) 
        closeBtn.forEach((btn) => btn.addEventListener('click',(e) => {e.stopPropagation(); this.closeCarousel()}))

        // Si l'item courant est passé via l'exterieur.
        // On positionne le slider sur celui-ci.
        if(options.currentItem !== 0 ){
            this.goToItem(this.options.currentItem)
        }


        //Navigation au clavier

        document.querySelector('.slider').addEventListener('keyup',e =>{

            if(e.key === 'ArrowRight' || e.key === 'Right'){
                this.next(); console.log('next');
            }else  if(e.key === 'ArrowLeft' || e.key === 'Left'){
                this.prev(); console.log('prev');
            }
        })

       this.createTabNav(this.btn)

       
    }

    /**
     * Applique les bonnes dimensions aux éléments
     */

    setStyle(){        
        let ratio = this.children.length / this.options.slidesVisible;
        this.container.style.width =(ratio*100) +"%"       
        this.item.forEach((item) => item.style.width = ((100/ this.options.slidesVisible) / ratio) +"%")      
    }

    /**
     * Event liés au caraousel
     */

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
        console.log(this.options.currentItem)  
        this.options.imgView = document.querySelector(`.slider [data-inc="${this.options.currentItem}"]`)
        
    }


    createTabNav(tabBtn){      

        // order is not guaranteed
        for (const [key, value] of Object.entries(tabBtn)) {

        value.addEventListener('keydown',(e)=>{
         
            if(e.key === 'Tab'){ 
                e.preventDefault()
                e.stopPropagation()
                key === 'cross' ? this.btn.prev.focus() : false
                key === 'next' ? this.btn.cross.focus() : false

                if( key === 'prev') {
                
                    if(this.options.imgView.tagName === 'VIDEO'){
                        document.querySelector(`.slider [data-inc="${this.options.currentItem}"]`).focus();
                    }else{
                        this.btn.next.focus()
                    }
                }              
            }              
        }) 
        }  
    }

}



