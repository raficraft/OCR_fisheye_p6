
class Photographer {
    constructor(data,id) {
      this.data = data;
      this.id = id;
    }
    
    static getAllIdentity(){
      return data.photographers
    }
  
    static getIdentity() {
        let thisData = data.photographers.find(el => el.id === id)
        return thisData
    }
  
    static getMedia(){
        let thisMedia =  data.media.filter(el => el.photographerId === id)
        return thisMedia
    }
    
    static showIdentity(){

      let el = this.getIdentity();  
      console.log(el);
  
      let sticker = ""

      sticker +=    '<article class="sticker">'+
                        '<header>'+
                            '<a class="flexImg" href="photographe.html?id='+el.id+'" alt="'+el.name+'">'+
                            '<img class="imgFlex" src="'+el.imgDir+el.portrait+'" height="100px"/>'+
                            '</a>'+
                        '</header>'+
                        '<article>'+                        
                            '<h2>'+el.name+'</h2>'+
                            '<p>'+el.city+', '+el.country+'</p>'+
                            '<p>'+el.tagline+'</p>'+
                            '<p>'+el.price+'€/jour</p>'+                       
                        '<footer class="nav nav__filter">'

            el.tags.forEach(tag =>{

            sticker +=   '<span class="filter"><a href="'+tag+'">#'+tag+'</a></span>' 

            })

            sticker += '</footer></article></article>'



      return sticker

    }

    static showMedia(){

        let media = this.getMedia()

        console.log(media)

    }
  
  

    static showAllIdentity(){
  
  
      let thisData = this.getAllIdentity()
      let sticker = "";
  
      console.log(thisData)
      //Utiliser une boucle for pour créer les stickers
      // de tout les photographe
  
      thisData.forEach(el => 
  
        {
  
          sticker +=  '<article class="sticker">'+
                        '<header>'+
                          '<a class="flexImg" href="photographe.html?id='+el.id+'" alt="'+el.name+'">'+
                          '<img class="imgFlex" src="'+el.imgDir+el.portrait+'" height="100px"/>'+
                          '</a>'+
                        '</header>'+
                        '<article>'+                        
                          '<h2>'+el.name+'</h2>'+
                          '<p>'+el.city+', '+el.country+'</p>'+
                          '<p>'+el.tagline+'</p>'+
                          '<p>'+el.price+'€/jour</p>'+                       
                        '<footer class="nav nav__filter">'
  
                el.tags.forEach(tag =>{
  
                  sticker +=   '<span class="filter"><a href="'+tag+'">#'+tag+'</a></span>' 
  
                })
  
          sticker += '</footer></article></article>'
  
        } 
        
      );
  
        return sticker;
  
    }
  
  }
  