const button = document.querySelector("button")
let text = document.querySelector("h1")

let myTab = [1,2,3,4]
let myResultTab = []

myTab.forEach(element => {
    sum = element*3
    myResultTab.push(sum)
});

function display () {
    text.innerHTML = 'Chargement...'
    setTimeout(() => {
        text.innerHTML = ""
        myResultTab.forEach(element => {
            text.innerHTML += `${element} `
        });
    }, 3000)
    
}

button.addEventListener('click', display)

console.log(myTab);
console.log(myResultTab);


