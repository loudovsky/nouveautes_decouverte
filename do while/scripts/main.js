const size = document.querySelector('#size')
const submit = document.querySelector('#valide')
const result = document.querySelector(".T-shirt")

let mesTshirts = [
    {
      "taille": "XL",
      "prix":  19.99,
      "img": "XL.webp"
    },
    {
      "taille": "L",
      "prix":  17.99,
      "img": "L.webp"
    },
    {
      "taille": "M",
      "prix":  15.99,
      "img": "M.webp"
    },
    {
      "taille": "S",
      "prix":  13.99,
      "img": "S.webp"
    }
]

submit.addEventListener('click', function() {
    let upperCase = size.value.toUpperCase()
    switch (upperCase)
    {
    case "XL":
        result.innerHTML = `<p>le prix de ce t-shirt taille ${mesTshirts[0].taille} est de <strong>${mesTshirts[0].prix}€</strong></p><div class="container-img">
        <img src="./img/${mesTshirts[0].img}" alt=""></div>`
        break;
    case "L":
        result.innerHTML = `<p>le prix de ce t-shirt taille ${mesTshirts[1].taille} est de <strong>${mesTshirts[1].prix}€</strong></p><div class="container-img">
        <img src="./img/${mesTshirts[1].img}" alt=""></div>`
        break;
    case "M":
        result.innerHTML = `<p>le prix de ce t-shirt taille ${mesTshirts[2].taille} est de <strong>${mesTshirts[2].prix}€</strong></p><div class="container-img">
        <img src="./img/${mesTshirts[2].img}" alt=""></div>`
        break;
    case "S":
        result.innerHTML = `<p>le prix de ce t-shirt taille ${mesTshirts[3].taille} est de <strong>${mesTshirts[3].prix}€</strong></p><div  class="container-img">
        <img src="./img/${mesTshirts[3].img}" alt=""></div>`
        break;
    default:
        result.innerHTML = `<p>Entrez la taille du tshirt svp</p>`
        break;
    }
})
