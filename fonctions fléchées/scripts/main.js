// Création de la fonction
const easyScroll = () => {
  // Sélection de tous les éléments avec la classe "view" dans le document
  let views = document.querySelectorAll(".view");

  // Pour chaque élément sélectionné
  views.forEach(view => {
      // Vérifie si le bas de la fenêtre déroulante est au-dessus de la moitié de l'élément
      if ((window.scrollY + window.innerHeight) > (view.offsetTop + (view.offsetHeight/2))) {
          // Si c'est le cas, ajoute la classe "hidden" à l'élément
          view.classList.add("hidden");
       }
   });
};

// Évenement sur le scroll
window.addEventListener('scroll', () => {
   easyScroll();
});

