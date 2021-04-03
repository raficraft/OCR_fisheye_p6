# Créez un site accessible pour une plateforme de photographes


## Objectif :

- Créer un site web respectant les normes d'accéssibilité

![Lien](https://user.oc-static.com/upload/2020/08/18/15977571210897_image2.png).


## Éléments fourni par OpenClassRooms

- [Maquette figma](https://www.figma.com/file/pt8xJxC1QffW4HX16QhGZJ/UI-Design-FishEye-FR)

- Notes de réunion detaillants les principales fonctionnalités et les exigences techniques à mettrent en oeuvre

- Fichier JSON listant les photographes et leurs médias associés

## Contraintes du projet

- Ajout d'une balises Alt pour les images (seul modification accépté)

- Utiliser le pattern Factory Method.

## Fonctionnalités

**Pages d'acceuil :**

- Liste de tous les photographes avec leur nom, leur slogan, leur localisation,
leur prix/heure, leurs tags et une image miniature de leur choix.
- En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
photographes est filtrée pour n'afficher que ceux qui correspondent à cette
étiquette.
- Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
page.

**Pages des photographes (une pour chaque photographe échantillon) :**

ffiche une galerie des travaux du photographe.
- Les photographes peuvent montrer à la fois des photos et des vidéos.
  - Dans le cas des vidéos, montrer une image miniature dans la galerie.
- Chaque média comprend le titre, la date, le prix et le nombre de clichés.
  - Lorsque l'utilisateur clique sur l'icône "Like", ça incrémente le nombre
de likes affiché.
  - Le nombre total de clichés doit être compté et ajouté au total du profil
du photographe.
- Les médias peuvent être triés par popularité, date ou titre.
- Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
lightbox :
  - Lorsque la lightbox est affichée, il y a une croix dans le coin pour
fermer la fenêtre.
  - Des boutons de navigation permettent de passer d'un élément média
à l'autre (les utilisateurs peuvent cliquer sur ces boutons pour
naviguer).
  - Les touches fléchées permettent également de naviguer entre les
médias.
- Afficher un bouton pour contacter le photographe.■ Le formulaire de contact est une modale qui s'affiche par-dessus le
reste.
  - Il comprend des champs pour les noms, l'adresse électronique et le
message.
  - Plus tard, le bouton de contact enverra un message au photographe.
Pour l'instant, seulement afficher le contenu des trois champs dans
les logs de la console

## Exigences design supplémentaires

**Rendre le système mobile convivial et responsive**
"Veillez à ce que toutes les pages soient responsives et s'adaptent bien aux smartphones ainsi
qu'aux écrans de bureau. Peu de nos utilisateurs visitent le site sur des tablettes, donc vous
n'avez pas besoin de concevoir pour cette taille d'écran".

**L'accessibilité est clé !**
"Il est très important que notre site soit accessible aux utilisateurs malvoyants. Toutes nos
photos doivent comporter des descriptions textuelles, et vous devez les inclure dans la page. De
plus, l'utilisateur doit pouvoir utiliser les commandes du clavier pour naviguer sur le site, comme
les touches fléchées de la lightbox".

  - Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant que
possible, au lieu de mettre des éléments <div> et <span> partout.
  - Lorsque vous devez créer un élément personnalisé, ajoutez des attributs ARIA pour
décrire ce qu'il fait.
  - Le code devrait passer les tests AChecker sans “known issue” (afin qu'il soit
conforme aux WCAG).
  - Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).
  - Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que représente
l'utilisation du site pour une personne malvoyante
  
