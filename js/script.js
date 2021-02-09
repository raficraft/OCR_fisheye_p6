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


let get = window.location.search.substring(1).split('=');

 paramRequest = get[0];
 valueRequest = get[1];


let id =parseInt(valueRequest)

console.log(id)

//Affiche un photographe
//el.innerHTML = Photographer.stickerIdentity(data,id);

console.log(data);










