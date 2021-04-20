class ScrollSpy{

    constructor(){

        this.spies =  document.querySelectorAll('[data-spy]')
        const skipLink = document.querySelector('.redirect__link')
        const ratio = 0.05


        /** 
         * @param {IntersectionObserverEntry[]} entries 
         * @param {IntersectionObserver} oberver 
         */
        const callback = function (entries, observer){            

            entries.forEach(entry => {
                if(entry.intersectionRatio > 0 ){
                    skipLink.classList.remove('sr__only')
                    skipLink.focus()
                }else{
                    skipLink.classList.add('sr__only')
                }
            })

        }

        if(this.spies.length > 0){  

            const  y =  Math.round(window.innerHeight * ratio)
            const observer = new IntersectionObserver(callback, {
                rootMargin : `-${y}px 0px -${window.innerHeight - y - 1}px 0px`
            })

            this.spies.forEach(spy=>{
                //oberve les éléments ciblés
                observer.observe(spy)
            })
        }
    }
}


new ScrollSpy;
