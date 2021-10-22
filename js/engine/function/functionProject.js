const alterateMediaObject = (dataMedia) => {
  //On ajoute des entrées au tableau passés en argument
  let thisData = GetData.getIdentity();
  let tabName = thisData.name.split(" ");
  let name = tabName[0];

  //Repertoire ou ce trouve l'image
  let key = "dirMedia";
  let value = `img/${name}/`;

  //On insère une class dynamique,
  //Pour distingué chaque media et pouvoir les recadrer le cas échéant
  let k1 = "class";
  let v1 = `media__${name}--`;
  let limit = dataMedia.length;

  // On ajoute Les nouvelles entrées au tableau NB : How tu use push Method ???
  for (var i = 0; i < limit; i++) {
    dataMedia[i][key] = value;
    dataMedia[i][k1] = v1 + i;
  }
};

const redifineDistribution_StickerIdentity = () => {
  // Considérant que l'on affiche seulement 6 fiches de photographe
  // maximum sur la page d'index et qu'au delà un système de pagination
  // serait pertinent. On gère l'affichage en fonction du nombre de fiche
  // que l'on affiche, pour garder un rendu visuelle cohérent.

  let stickerEl = document.querySelectorAll(".sticker");

  let size = stickerEl.length;

  const mainParent = document.querySelector(".main__wrapper--index");

  if (multipleOfThree(size) === false || stickerEl.length === 1) {
    if (!mainParent.classList.contains("orderSticker__mainCenter")) {
      mainParent.classList.add("orderSticker__mainCenter");
    }

    for (let i = 0; i < size; i++) {
        let currentSticker = stickerEl[i];
        currentSticker.style.marginLeft = "2rem";
        currentSticker.style.marginRight = "2rem";
    }
  } else {
    if (mainParent.classList.contains("orderSticker__mainCenter")) {
      mainParent.classList.remove("orderSticker__mainCenter");
    }
  }
};

const sortDataMedia = (sortBy) => {
  switch (sortBy) {
    case "popularity":
      data.media.sort(function (a, b) {
        return b.likes - a.likes;
      });
      break;

    case "date":
      data.media.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      break;

    case "title":
      data.media.sort((a, b) =>
        a.alt.localeCompare(b.alt, "fr", { ignorePunctuation: true })
      );
      break;
  }
};
