const manageLike = (target,behavior) => {
   
    let like = parseInt(target.textContent)

    let newCount = 0
    
    if(behavior === 'add'){
        newCount = like + 1
    }else if(behavior === 'del'){
        newCount = like - 1
    }


    target.innerHTML = `${newCount}<i class="fas fa-heart fontIcon"></i>`
    target.removeAttribute('data-js')

    const allLikeElement = document.querySelectorAll('.sticker__media--like')  
    let limit = allLikeElement.length


    let sumLike = 0
    for (let i = 0; i<limit; i++){
        sumLike = sumLike + parseInt(allLikeElement[i].textContent)
    }

    const sumLikeElement = document.querySelector('.sumLike')
    sumLikeElement.innerHTML = `${sumLike}<i class="fas fa-heart fontIcon"></i>`

}

