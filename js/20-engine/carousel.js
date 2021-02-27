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
        


        this.root = document.querySelector('#carousel')        
        this.container = document.querySelector('.carousel__container');
        this.children = [].slice.call(this.el.children)
        this.item = [].slice.call(document.querySelectorAll('.carousel__item'))
        this.moveCallbacks = []


        let prevBtn = document.querySelector('.carousel__prev')
        let nextBtn = document.querySelector('.carousel__next')


        nextBtn.addEventListener('click',this.next.bind(this))
        prevBtn.addEventListener('click',this.prev.bind(this))

        this.setStyle()  

  

       
        // si l'item courant est passé via l'exterieur.
        // On positionne le slide sur celui-ci.
        if(options.currentItem !== 0 ){
            this.goToItem(this.options.currentItem-1)
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



