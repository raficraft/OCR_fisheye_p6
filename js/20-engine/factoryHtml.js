
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

// Renvoie un objet
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



// Instance et passage à la vue

//On instancie l'usine
let factoryHtml = new htmlFactory

// On utilise le tableau ce trouvant dans le repertoire designHTml/modalBox.js

// On envoie à l'atelier qui nous retourne une chaine de caractère
let thisHtml = factoryHtml.createHtmlEl(modalBox,'elHtml')
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
let thisHtmlObject = factoryHtml.createHtmlEl(modalBox,'elHtmlObject')
document.body.appendChild(thisHtmlObject,body);
console.log(thisHtmlObject);
console.log(typeof thisHtmlObject);




// On fait de même pour créer le slider de media*/
// On utilise le tableau ce trouvant dans le repertoire designHTml/modalBox.js

//L'objet et injecter au click








var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




















