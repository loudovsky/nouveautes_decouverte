let titre = document.querySelector('h1')

let button = document.querySelector('button')


const tableau = [1, 2, 3, 4];

function tabAdd(tab, callback) {
    const newTableau = [];
    for (i=0; i<tab.length; i++) {
        newTableau.push(callback(tab[i]))
    }
    return newTableau
}
const resultat = tabAdd(tableau, (valeur)=>{
    return valeur * 3;
})

console.log(resultat)

function tabAdditionTimeout() {
    setTimeout(() => {
        titre.innerHTML = resultat
    }, 3000)
}

button.addEventListener('click', tabAdditionTimeout)


