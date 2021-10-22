class CustomSelectEvent {
  constructor() {
    /** */

    this.bodyEl = document.querySelector("#otherCustomSelect");
    this.openBtn = document.querySelector("#customSelect--trigger");
    this.swapBtn = document.querySelectorAll(
      '.customSelect__body--btn[data-context="swap"]'
    );
    this.lastBtn = document.querySelector(
      '.customSelect__body--btn[data-order="2"]'
    );

    this.openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openSelect();
    });

    this.swapBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.target;
        this.swap(btn);
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target !== "img" || e.target !== "a") {
        this.closeSelect();
      }
    });
  }

  openSelect() {
    if (this.bodyEl.dataset.status === "close") {
      this.bodyEl.setAttribute("data-status", "openList");
    } else if (this.bodyEl.dataset.status === "openList") {
      this.bodyEl.setAttribute("data-status", "close");
    }
  }

  closeSelect() {
    this.bodyEl.setAttribute("data-status", "close");
  }

  swap(btn) {
    const childrenBtn = btn.firstElementChild;
    const filter = childrenBtn.dataset.value;

    const noSwapEl = document.querySelector(
      '.customSelect__body--btn[data-context="noSwap"] span'
    );
    const noSwapContent = document.querySelector(
      '.customSelect__body--btn[data-context="noSwap"]'
    );
    const mediaContent = document.querySelector("#photography");

    childrenBtn.remove();
    noSwapEl.remove();

    noSwapContent.insertAdjacentElement("afterbegin", childrenBtn);
    btn.insertAdjacentElement("beforeend", noSwapEl);

    localStorage.setItem("sortDataMedia", filter);
    sortDataMedia(localStorage.getItem("sortDataMedia"));

    mediaContent.remove();

    factory.injectCarousel();
    factory.injectMedia();

    this.openBtn.focus();
    this.closeSelect();
  }
}
