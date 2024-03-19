  
  // méthode d'objet 

  // 🟦 🟦 🟦 🟦 🟦 🟦 mise en pratique 1 🟦 🟦 🟦 🟦 🟦 🟦 
  
  // Sélectionne le bouton dans le document HTML
let buttonBox = document.querySelector(".buttonBox");

// Définition de l'objet 'box'
let box = {
    // Sélection de l'élément HTML avec la classe 'box'
    theBox : document.querySelector('.box'),
    // Tableau de couleurs possibles
    couleurs: ['red', 'blue', 'green', 'purple'],
    // Indice de la couleur actuelle
    indiceCouleur: 0,
    // Méthode pour changer la couleur de la boîte
    changerCouleur: function() {
      // Incrémentation de l'indice de couleur, bouclant autour du tableau si nécessaire
      this.indiceCouleur = (this.indiceCouleur + 1) % this.couleurs.length;
      // Changement de la couleur de fond de la boîte en utilisant la couleur correspondant à l'indice actuel
      this.theBox.style.backgroundColor = this.couleurs[this.indiceCouleur];
    }
  };


  
// Fonction globale pour changer la couleur de la boîte
function changerCouleur() {
  // Appel de la méthode 'changerCouleur' de l'objet 'box'
  box.changerCouleur();
}

// Ajoute un écouteur d'événements sur le bouton, qui appelle la fonction 'changerCouleur' lorsque le bouton est cliqué
buttonBox.addEventListener('click', function(){
    changerCouleur()
})


// 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 mise en pratique 2 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗

let result = document.querySelector('.result')
let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let car3 = document.querySelector('.car3')
let car4 = document.querySelector('.car4')

// Définition de l'objet "Voiture"
let Voiture = {
  marque: '',
  modèle: '',
  année: 0,
  afficherInfos: function() {
    console.log(`Cette voiture est une ${this.marque} ${this.modèle} de ${this.année}.`);
    result.innerHTML = ""
    result.innerHTML += `Cette voiture est une ${this.marque} ${this.modèle} de ${this.année}.`
  }
};

// Création d'une première voiture
let voiture1 = Object.create(Voiture);
voiture1.marque = 'Toyota';
voiture1.modèle = 'Corolla';
voiture1.année = 2018;

// Création d'une deuxième voiture
let voiture2 = Object.create(Voiture);
voiture2.marque = 'Honda';
voiture2.modèle = 'Civic';
voiture2.année = 2020;

// Création d'une deuxième voiture
let voiture3 = Object.create(Voiture);
voiture3.marque = 'Mercedes';
voiture3.modèle = 'Classe S';
voiture3.année = 2021;

// Création d'une deuxième voiture
let voiture4 = Object.create(Voiture);
voiture4.marque = 'Peugeot';
voiture4.modèle = '5008';
voiture4.année = 2023;

// Appels de la méthode afficherInfos pour chaque voiture
// voiture1.afficherInfos(); // Affiche : Cette voiture est une Toyota Corolla de 2018.
// voiture2.afficherInfos(); // Affiche : Cette voiture est une Honda Civic de 2020.

car1.addEventListener('click', function(){
  voiture1.afficherInfos()
})
car2.addEventListener('click', function(){
  voiture2.afficherInfos()
})
car3.addEventListener('click', function(){
  voiture3.afficherInfos()
})
car4.addEventListener('click', function(){
  voiture4.afficherInfos()
})




