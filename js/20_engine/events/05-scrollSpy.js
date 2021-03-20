const ratio = .3
let observer = null


/**
 * 
 * @param {HTMLElement} el
 */
const showThis = (el) => {

    el.classList.add('showThis')

}



/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 * @param {IntersectionObserver} observer 
 */


const callBack = function (entries, observer){
    entries.forEach(entry => {
        
        const constShowEl = document.querySelector('.redirect__link')
        if(entry.intersectionRatio > 0){  
            
            console.error('vue');
            constShowEl.classList.add('showThis')  
        }else if(entry.intersectionRatio === 0){ 

            console.error('pas vue');
            constShowEl.classList.remove('showThis')  

        }

    })
    console.error(entries);
}


const spies = []

spies.push(document.querySelector('[data-spy]'))

/**
 * 
 * @param {NodeListOf.<Element} els 
 */
const observe = (els) => {    
    if(observer !== null){
        els.forEach(elem => observer.unobserve(els))
    }
    const y = Math.round(window.innerHeight * ratio)
    console.log(spies);
    observer  = new IntersectionObserver(callBack,{
        rootMargin : `-${window.innerHeight - y -1}px 0px -${y}px 0px`
    })
    spies.forEach(function (spy) {
        observer.observe(spy)        
    });
}


if(spies.length > 0){
    observe(spies)
    window.addEventListener('resize',()=>{
        observe(spies)
    })

}