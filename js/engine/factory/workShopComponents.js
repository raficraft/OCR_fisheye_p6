class workshopComponent {
  constructor() {
    sortDataMedia(localStorage.getItem("sortDataMedia")); // Réordonnancement par défaut du tableau avant usage
  }

  /**
   *
   * @param {class} callback
   * @returns {HTMLElement} string
   */

  createComponents = function (callback) {
    let makeComponent = [];
    makeComponent.push(callback); //Check l'utilité du push et la forme des données retourné [{}] || {} / {refactoring}
    return makeComponent;
  };

  /**
   *
   * @param {Object} injectThis Element HTML commandé par la factory aux ateliers factory/workshopComponent.js
   * @param {HTMLElement} target
   */

  renderComponent(injectThis, target) {
    injectThis.map(function (injectThis) {
      target.insertAdjacentHTML("beforeend", injectThis.elHTML);
    });
  }
}
