class CheckURL{

    constructor(request={}){

        this.pathArray   = window.location.pathname.substring(1).split('.')
        this.path        = this.pathArray[0]
        this.params      = window.location.search ? window.location.search  : false        
        this.request     = Object.assign({},{
            idURL : false,
            tagURL : false         
        },request)


       

        if(this.params !== false){

            //On récupere les paramètres passer dans l'url (?id='number') || (?tags='string')
            const get = this.params.substring(1).split('=');

            const paramRequest = get[0];
            const valueRequest = get[1];

            if(paramRequest === 'id'){
                //On transforme la valeur string en number
                 this.request.idURL = parseInt(valueRequest)
            }else if(paramRequest === 'tags'){               
                this.request.tagURL = valueRequest
            }            
        }
    }
}

const checkURL = new CheckURL;



  




