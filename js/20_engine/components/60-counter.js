
  let createCounter = function (thisData){

    this.elHTML = `<div id="counterLike" class="counterLike">
                    <p class="sumLike" aria-label="likes">${thisData.countLike}<i class="fas fa-heart"></i></p>
                    <p>${thisData.price}€ / jour</>
                  </div>`
  }
