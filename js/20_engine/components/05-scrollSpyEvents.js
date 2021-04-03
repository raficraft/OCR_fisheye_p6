class ScrollSpy{

    constructor(){

        this.spies =  document.querySelectorAll('[data-spy]')
        this.skipLink = document.querySelector('redirect__link')
        const ratio = 0.1

        console.log(this.spies);

        /** 
         * @param {IntersectionObserverEntry[]} entries 
         * @param {IntersectionObserver} oberver 
         */
        const callback = function (entries, observer){
            

            entries.forEach(entry => {
                console.log(entry)
                if(entry.intersectionRatio > 0 ){
                    console.log('on affiche pas');
                }else{
                    console.log('on affiche');
                }
            })
        }

        console.log(this.spies.length);
        if(this.spies.length > 0){  

            const  y =  Math.round(window.innerHeight * ratio)
            console.log(y);
            console.log(window.innerHeight - y - 1);
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