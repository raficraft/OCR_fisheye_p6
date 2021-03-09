let addlike = (target) => {

 // get innerText

    let like = parseInt(target.textContent)
    let newCount = like + 1
    target.innerHTML = `${newCount}<i class="fas fa-heart fontIcon"></i>`
    target.removeAttribute('data-js')

    let allLikeElement = document.querySelectorAll('.sticker__media--like')  
    let limit = allLikeElement.length


    let sumLike = 0
    for (let i = 0; i<limit; i++){
        sumLike = sumLike + parseInt(allLikeElement[i].textContent)
    }


    let sumLikeElement = document.querySelector('.sumLike')
    sumLikeElement.innerHTML = `${sumLike}<i class="fas fa-heart fontIcon"></i>`

}