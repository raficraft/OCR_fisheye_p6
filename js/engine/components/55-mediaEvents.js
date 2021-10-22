class mediaEvents {
  constructor() {
    this.rootElement = document.querySelectorAll(".sticker__media");
    this.mediaLink = document.querySelectorAll(".sticker__media .flexImg");
    this.likeBtn = document.querySelectorAll(
      '.sticker__media [data-js="addLike"]'
    );
    this.voteInfinite = false;

    this.mediaLink.forEach((media) => {
      media.addEventListener("click", (e) => {
        e.preventDefault();
        this.openCarousel(e.target);
      });
    });

    this.likeBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.manageVote(e.target);
      });

      btn.addEventListener("keyup", (e) => {
        console.log(e.key);
        e.preventDefault();
        if (e.key === "Enter" || e.key === "Space") {
          this.manageVote(e.target);
        }
      });
    });
  }

  openCarousel(target) {
    factory.injectCarousel();

    let item = parseInt(target.dataset.item);
    document.querySelector(".slider").setAttribute("aria-hidden", false);
    document.querySelector("#main").setAttribute("aria-hidden", true);
    document.querySelector(".carousel__next").focus();

    hiddenScrollBar();

    new Carousel(document.querySelector(".carousel__container"), {
      slidesToScroll: 1,
      slidesVisible: 1,
      currentItem: item,
      loop: true,
    });
  }

  manageVote(target) {
    if (this.voteInfinite === false) {
      if (target.dataset.status === "true") {
        manageLike(target, "add");
        target.setAttribute("data-status", "false");
      } else if (target.dataset.status === "false") {
        manageLike(target, "del");
        target.setAttribute("data-status", "true");
      }
    } else {
      manageLike(target, "add");
    }
  }
}
