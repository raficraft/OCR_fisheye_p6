/*

let thisData =   data.photographers.find(f => f.id === 243);
let thisMedia =  data.media.filter(m => m.photographerId === id)

let sticker = '<article>'+
              '<h2>'+thisData.name+'</h2>'+
              '<img src="'+thisData.imgDir+thisData.portrait+'" height="100px">'+
              '<p>'+thisData.city+','+thisData.country+'<p/>'+
              '<p>'+thisData.tagline+'<p/>'+
              '<p>'+thisData.price+'/jour<p/>'+
              '</article>';


          console.log(sticker)    

let el = document.getElementById("test");
el.innerHTML = sticker;


for ([key, value] of Object.entries(thisMedia)) {
  console.log(`${key}: ${value}`);

  for ([k, v] of Object.entries(value)) {

    console.log(`${k}: ${v}`);
  }

}
*/


class Photographer {
  constructor(data,id) {
    this.data = data;
    this.id = id;
  }
  
  static allIdentity(){
    return data.photographers
  }

  static identity() {
    return data.photographers.find(el => el.id === id)
  }

  static media(){
    return  data.media.filter(el => el.photographerId === id)
  }
  
  static stickerIdentity(){

    let sticker = "<h1>"+this.identity(data,id).name+"</h1>"
    return sticker
  }


  static allStickerIdentity(){


    let thisData = this.allIdentity(data)
    let sticker = "";

    console.log(thisData)
    //Utiliser une boucle for pour créer les stickers
    // de tout les photographe

    thisData.forEach(el => 

      {

        sticker +=  '<article class="sticker">'+
                      '<header>'+
                        '<a class="flexImg" href="photographer.html?id='+el.id+'" alt="'+el.name+'">'+
                        '<img class="imgFlex" src="'+el.imgDir+el.portrait+'" height="100px"/>'+
                        '</a>'+
                      '</header>'+
                      '<div>'+
                        '<h2>'+el.name+'</h2>'+
                        '<p>'+el.city+', '+el.country+'</p>'+
                        '<p>'+el.tagline+'</p>'+
                        '<p>'+el.price+'€/jour</p>'+
                      '</div>'+
                      '<footer class="nav nav__filter">'

              el.tags.forEach(tag =>{

                sticker +=   '<span class="filter"><a href="'+tag+'">#'+tag+'</a></span>' 

              })

        sticker += '</footer></article>'

      } 
      
    );

      return sticker;

  }

}


/*

let get = window.location.search.substring(1).split('=');

 paramRequest = get[0];
 valueRequest = get[1];


let id =parseInt(valueRequest)

console.log(id)

 new Photographer(data,id);
/*
console.log(Photographer.identity(data,id));
console.log(Photographer.media(data,id));
console.log(Photographer.allIdentity(data))

//console.log(Photographer.allStickerIdentity(data));


console.log();
*/


let el = document.getElementById("main__wrapper");
//affiche tous les photographe
el.innerHTML = Photographer.allStickerIdentity(data);

//Affiche un photographe
//el.innerHTML = Photographer.stickerIdentity(data,id);

console.log(data);










