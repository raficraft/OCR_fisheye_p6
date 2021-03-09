let sortMedia = (target)=>{


       // on récupère la valeur de trie à passé à la fonction                 
       const sortBy_customSelect = target.dataset.value

       sortDataMedia(sortBy_customSelect)
       const elementToEmpty = document.querySelector('.photography')

       elementToEmpty.querySelectorAll('*').forEach(n => n.remove());

       showMedia()
}