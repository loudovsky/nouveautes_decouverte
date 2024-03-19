// =-=-=-=-=-=-==-=-=-=-=-=-=| Promises |=-=-=-=-=-=-==-=-=-=-=-=-=

// Promise => objet renvoyé par une fonction asynchrone et qui représente l'état courant de l'opération (se produit dans le même temps)


// =-=-=-=-=-=-=| synchrone & asynchrone |=-=-=-=-=-=-=

// synchrone : bloque l'exécution des lignes de code qui viennent après tant qu'il ne 'fonctionne' pas
// asynchrone : ne bloque pas
// img explicative : https://user.oc-static.com/upload/2017/12/26/15142754255902_Tasks.png

// let test = setTimeout(() => {
//   console.log('en retard');
// }, 1000);


// console.log(test);

// console.log('present');


// =-=-=-=-=-=-=| Etat des promesse |=-=-=-=-=-=-=

// 3 états dans une promesses comme IRL : pending --> fulfilled ou rejected
// new Promise((resolve, reject) => {code asynchrone})









// function promiseExample() {
//   return new Promise(function(resolve, reject){
//     // resolve('promesse resolu :)')
//     reject('promesse rejecté :c')
//   })
// }

// console.log(promiseExample());




// + then; une fonction qui reçoit la fonction à exécuter si résolu
// + catch(error); une fonction qui reçois la fonction à executer si rejeter

// console.log( promiseExample().then( function(piou) {console.log(piou);} ).catch(function(error) {console.log(error)}))







// =-=-=-=-=-=-=| simplifier la promesse |=-=-=-=-=-=-=


// console.log( 
  
//   promiseExample()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {console.log(error);}) 
  
// ); 

// fetch(`https://api.exampe.com/data`)
//   .then(response => response.json())
//   .then(daa => {
//     console.log(data);
//   })


//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })



// =-=-=-=-=-=-=| pourquoi les promesses, comparaison avec les callback |=-=-=-=-=-=-=

// les Callback :

// function exampleFonction2(callback) {
//   setTimeout(() => {
//     console.log(...);
//     callback()
//   }, 1000);
// }

// exampleFonction2(() => { ...
//   exampleFonction3(() => { ...
//     exampleFonction4(() => { ...
//       exampleFonction5(() => { ...
//       })
//     })
//   })
// })


// - if(too much callback){callback hell}; se stack l'un sur l'autre et crée une pyramide de callback, 
// - affecte la lisibilité et la maintenance du code, 



// les Promesses :

// =-=-=-=-=-=-=| example promise |=-=-=-=-=-=-=


/*function toMetro() {
    return new Promise((resolved, reject) => {
      setTimeout(() => {
        resolved("metro-A 🚋 ... 🚶 ... 🏠 Home");
        
      }, 1000);
    })
  }*/
  
  // toMetro().then(data => {console.log(data);})
  
  /*function changeMetro() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let metro = true
  
        if (metro) {
          resolve("metro-B 🚋 ... 🚶 ... 🚋 metro-A");
        } else{
          reject("Metro-B est indisponible, return Home 🏠 ... 🚋 metro-A ... 🚶")
        }
  
      }, 800);
    })
  }
  
  function toSchool() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let Olivier = true
  
        if (Olivier) {
          resolve("DigitalCity 🏢 ... 🚶 ... 🚋 metro-A");
        } else{
          reject("Olivier n'est pas là, t'es venu pour rien (._.)")
        }
  
      }, 1500);
    })
  }*/
  
  
  // + then; une fonction qui reçois la fonction à executer si résolu
  // + catch(error); une fonction qui reçois la fonction à executer si rejeter
  // + gestion d'erreur sur des opérations asynchrone plus complexe sera plus simple
  
  
  
  // toMetro()
  // .then(message => {console.log(message); return changeMetro()})
  // .then(message => {console.log(message); return toSchool()})      
  // .then(message => {console.log(message); console.log("Arrivé à votre destination!");})
  // .catch(error => console.error("error : ", error))
  
  
  
  
  
  // =-=-=-=-=-=-=| promise all & race |=-=-=-=-=-=-=
  
  /*let testPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test 1 ✔️')
    }, 1000);
  })
  
  let testPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test 2 ✔️')
    }, 100);
  })
  
  
  let testPromise3 = new Promise((resolve, reject) => {
    resolve('test 3 ✔️')
  })*/
  
  // Promise.all([testPromise1, testPromise2, testPromise3])
  
  // .then((messages) => console.log(messages)) // .all; tout en meme temps
  
  
  // Promise.race([testPromise1, testPromise2, testPromise3])
  // .then((message) => console.log("promise.race : " + message))
  
  // .race; premier arrivé, premier servi
  
  
  
  
  
  // =-=-=-=-=-=-=| Exercise |=-=-=-=-=-=-=
  
  // Exercise:
  
  // - Crée une fonction qui prendra un nom comme input(en argument) et return une promesse
  // - La promesse devrait être résolue aprés une attente de 2 secondes
  // - Si aucun nom n'a été fourni, la promesse devrait être rejetée avec un message d'erreur dans la console
  
  // - Aprés avoir créé la fonction et l'avoir testé dans la console, faire en sorte que la fonction ne se lance que si on click sur confirm,
  // - Crée deux .then, 1er sera le message d'attendre pendant 2 secondes et le second le message ne question qui viendra de la promesse crée juste avant
  // - Crée un .catch qui renverra votre message d'erreur de la fonction dans log et l'HTML
  
  // utilisez uniquement ce que vous avez vu sur les promesses évidemment,  gl :)


function delayedGreeting(name) {
  return new Promise((resolve, reject) => {
    // Check si un nom a été fourni
    if (!name) {
      reject(`Aucun nom n'a été fourni`);
    } else {
      // simuler 2 seconde d'attente
      setTimeout(() => {
        resolve(`Bonjour, ${name}!`);
      }, 2000);
    }
  })
}

let inputName = document.querySelector('.name')
let confirmName = document.querySelector('.button')
let result = document.querySelector('.result')

// delayedGreeting()


confirmName.addEventListener('click', () => {
  delayedGreeting(inputName.value)
  .then(result.innerHTML = `Wait...`) 
  .then(greeting => {
    result.innerHTML = greeting // (aprés 2 seconds)
  })
  .catch(error => { // erreur si pas de nom reçu
      console.error("error :", error); 
      result.innerHTML = `${error}`
  })
  inputName.value = ""
})
  