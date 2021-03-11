let sortMedia = (target)=>{


       // on récupère la valeur de trie à passé à la fonction                 
       const sortBy_customSelect = target.dataset.value

       sortDataMedia(sortBy_customSelect)
       const elementToEmpty = document.querySelector('.photography')
       elementToEmpty.querySelectorAll('*').forEach(n => n.remove());
       showMedia()

        /* Suite à des effets transversaut qui reinject la gallery d'image {showMedia}
        on réaffecte les ecouteurs d'événement au attibuts [data-js] contenue
        dans le parent {.sticker__media}
        */
       new EventsDispatcher('.sticker__media [data-js]')

    
}