
function htmlFactory() {

    this.createHtmlEl = function(data,method){

        let makeData
        

        switch(method){

            //Method pour obtenir le code HTML generer dans une chaine de caratère
            // Insert with innerHtml or insertAdjacentHTML('afterbegin', 'html générer');

            case 'elHtml' :
                
                makeData = workShopHtmlElements(data)

            break;

            //Method pour obtenir le code HTML générer dans un object
            // Insert with appendChild or other 

            case 'elHtmlObject' :
                
                makeData = new workShopHtmlObject(data)

            break;           

        }

        return makeData
      
    }
}




// Renvoie une chaine de caratère

function workShopHtmlElements(thisObject){

    this.elHtml = ``


        let sizeOfobject = Object.size(thisObject)

        for(let i = 0; i< sizeOfobject; i++){

            //console.log(i);

            if(thisObject[i]['html']){

            
                if(thisObject[i]['html']['tag']){

                    let tag = thisObject[i]['html']['tag']

                   // console.log(thisObject[i]['html']['tag']);

                    this.elHtml += `<${tag} `

                    for (const k1 in thisObject[i]['attr']) {

                        let v = `${thisObject[i]['attr'][k1]}` 
                        
                        //Gestion des attributs ainsi que de l'attribut vide "checked"

                        if(k1 !== 'checked' || k1 !== 'required' || k1 !== 'controls' || k1 !== 'disabled' || k1!== open || k1 !== 'readOnly'){
                            this.elHtml += `${k1}="${v}" `
                        }else{
                            this.elHtml += `${v}`
                        }
                    }  

                    this.elHtml += `>`    
                    
                        if(thisObject[i]['textContent']){
                            let thisText = thisObject[i]['textContent']['text']
                            this.elHtml += thisText
                        }

                
                        //On boucle sur le child
                        //Qui peut contenir un nombre indéfinis 
                        //De contenu supplémentaires
                
                        if(thisObject[i]['child']){
                        
                            this.elHtml += workShopHtmlElements(thisObject[i]['child'])
                        
                        }
                    

                    if(
                        tag !== 'area' || tag !== 'base' || tag !== 'br' || tag !== 'col' || tag !== 'embed' || tag !== 'hr'  
                        || tag !== 'img' || tag !== 'input' || tag !== 'link' || tag !== 'meta' 
                        || tag !== 'param' || tag !== 'source' || tag !== 'track' || tag !== 'wbr'
                    ){
                
                        this.elHtml +=`</${tag}>`
                    }
                }

            }

        }

    return this.elHtml


}


function workShopHtmlObject(thisObject) {


   this.elHtml


    let sizeOfobject = Object.size(thisObject)

    for(let i = 0; i< sizeOfobject; i++){


        if(thisObject[i]['html']){            
            
            if(thisObject[i]['html']['tag']){
                elHtml

                let tag = thisObject[i]['html']['tag']
               
                this.elHtml =  document.createElement(`${tag}`);


                for (const k1 in thisObject[i]['attr']) {

                    let v = `${thisObject[i]['attr'][k1]}` 
                    
                    //Gestion des attributs ainsi que de l'attribut vide "checked"

                    if(k1 !== 'checked' || k1 !== 'required' || k1 !== 'controls' || k1 !== 'disabled' || k1!== open || k1 !== 'readOnly'){
                        this.elHtml.setAttribute(`${k1}`,`${v}`) 
                    }else{
                        this.elHtml.setAttribute(`${v}`)
                    }
                }
                
                if(thisObject[i]['textContent']){
                    let thisText = thisObject[i]['textContent']['text']
                    this.elHtml.textContent(`${thisText}`)
                }

                if(thisObject[i]['child']){                  
                        
                    this.elHtml.insertAdjacentHTML('afterbegin',workShopHtmlElements(thisObject[i]['child']))
                
                }                

            }
        }

    }

    return this.elHtml

}



//Crée un atelier similaire mais qui nous renverrai un objet
// Utilisation de createDocument pour le tag , de .setAttribute() pour l'id la class ect... et  textContent pour les contenu
// voir la métodhe pour injecter des enfants


let myHtml = 
   {
       [0]:{
        ['html']:{'tag':'dialog'} , 
        ['attr']:{'class':'dialogBox', "open":"open"} ,         
            ['child']:{

                [0]:{
                    ['html']:{'tag':'button'} , 
                    ['attr']:{'class':'dialogBox__close',} , 
                    ['textContent']:{'text': 'X'} , 
                },               
                [1]:{
                    ['html']:{'tag':'form'} , 
                    ['attr']:{"method" : "dialog", "action" : "#"} , 
                    ['child'] : {
                        [0]:{
                            ['html']:{'tag':'fieldset'},
                            ['attr']:{'class':'fieldset'},
                            ['child']:{
                                [0]:{
                                    ['html']:{"tag": "legend"},
                                    ['textContent'] : {"text": "Me contacter"}
                                }
                            }
                        },
                        [1]:{
                            ['html']:{'tag':'div'} , 
                            ['attr']:{'id': 'lol450','class':'megalol2',} ,
                            ['child']:{
                                [0]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'brick__input'} ,
                                    ['child']:{
                                        [0]:{
                                            ['html']:{'tag':'label'} , 
                                            ['attr']:{'class':'brick',} ,
                                            ['textContent'] : {'text' : 'Prénom'}
                                        },
                                        [1]:{
                                            ['html']:{'tag':'input'} , 
                                            ['attr']:{'class':'brick__input', "type":'text', "placeholder" : "Mon prénom"} ,
                                        }
                                    }
                                },
                                [1]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'brick__input'} ,
                                    ['child']:{
                                        [0]:{
                                            ['html']:{'tag':'label'} , 
                                            ['attr']:{'class':'brick',} ,
                                            ['textContent'] : {'text' : 'Nom'}
                                        },
                                        [1]:{
                                            ['html']:{'tag':'input'} , 
                                            ['attr']:{'class':'brick__input', "type":'text', "placeholder" : "Mon Nom"} ,
                                        }
                                    }
                                },
                                [2]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'brick__input'} ,
                                    ['child']:{
                                        [0]:{
                                            ['html']:{'tag':'label'} , 
                                            ['attr']:{'class':'brick',} ,
                                            ['textContent'] : {'text' : 'Email'}
                                        },
                                        [1]:{
                                            ['html']:{'tag':'input'} , 
                                            ['attr']:{'class':'brick__input', "type":'emial', "placeholder" : "Email"} ,
                                        }
                                    }
                                },
                                [3]:{
                                    ['html']:{'tag':'div'} , 
                                    ['attr']:{'class':'brick__input'} ,
                                    ['child']:{
                                        [0]:{
                                            ['html']:{'tag':'label'} , 
                                            ['attr']:{'class':'brick',} ,
                                            ['textContent'] : {'text' : 'Votre message'}
                                        },
                                        [1]:{
                                            ['html']:{'tag':'textarea'} , 
                                            ['attr']:{'class':'brick__input', "placeholder" : "Message", "rows" : "5", "cols" : "28"}
                                        }
                                    }
                                },
                                [4]:{
                                    ['html']:{'tag':'button'} , 
                                    ['attr']:{'class':'brick__input'} ,
                                    ['textContent'] : {'text' : "Envoyer"}
                                  
                                }
                            } 

                        }
                    }
                }

            }  
        },


    
    }


//On instancie l'usine
let factoryHtml = new htmlFactory


// On envoie à l'atelier qui nous retourne une chaine de caractère
let thisHtml = factoryHtml.createHtmlEl(myHtml,'elHtml')
// Pour plus de simplicité on utilise la methode insertAdjacentHTML
// Qui nous permet d'inserer l'élément plus présciement ou l'on veux.
// @param de insertAdjacentHTML
//  'beforebegin' : Avant l'element  lui-même.
//  'afterbegin' : Juste à l'intérieur de l'element , avant son premier enfant.
//  'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.
//  'afterend' : Après element lui-même.
document.body.insertAdjacentHTML('afterbegin', thisHtml);
console.log(thisHtml);
console.log(typeof thisHtml);






// On envoie à l'atelier qui nous retourne un objet
let thisHtmlObject = factoryHtml.createHtmlEl(myHtml,'elHtmlObject')
document.body.appendChild(thisHtmlObject,body);
console.log(thisHtmlObject);
console.log(typeof thisHtmlObject);






















