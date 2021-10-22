class BrowserInfo {
  constructor(request = {}) {
    this.pathArray = window.location.pathname.substring(1).split(".");
    this.path = this.path
      ? (this.path = this.pathArray[0])
      : (this.path = "index");
    this.params = window.location.search ? window.location.search : false;
    this.request = Object.assign(
      {},
      {
        idURL: false,
        tagURL: false,
        paramsURL: false,
      },
      request
    );

    if (this.params !== false) {
      //On récupere les paramètres passer dans l'url (?id='number') || (?tags='string')
      const get = this.params.substring(1).split("=");

      const paramRequest = get[0];
      const valueRequest = get[1];

      this.request.params = get[0];

      if (paramRequest === "id") {
        //On transforme la valeur string en number
        this.request.idURL = parseInt(valueRequest);
      } else if (paramRequest === "tags") {
        this.request.tagURL = valueRequest;
      }
    }

    //Rapport de chargement de la page
    /*
    console.log(`this pathArray :`);
    console.log(this.pathArray);
    console.log(`this.path : ${this.path}`);
    console.log(`this.params : ${this.params}`);
    console.log(`this.request :`);
    console.log(this.request);
    console.log(`this.idURL : ${this.request.idURL}`);
    console.log(`this.tagURL : ${this.request.tagURL}`);
    console.log(`this.paramsURL : ${this.request.paramsURL}`);
    console.log(`la largeur de la fenêtre est de  : ${window.innerWidth}`);
    console.log(`la hauteur de la fenêtre est de  : ${window.innerHeight}`);
    console.log(window.screen);*/

    // Si l'on filtre les photographes on stock le focus sur le lien correspondant
    if (this.request.params !== false && this.request.params === "tags") {
      localStorage.setItem("eventSource", "linkNav");
      localStorage.setItem("eventValue", this.params);
    } else {
      localStorage.setItem("eventSource", "index");
      localStorage.setItem("eventValue", false);
      localStorage.setItem("sortDataMedia", "popularity");
    }
  }
}

const browserInfo = new BrowserInfo();