// Chargement du JSON
var requestURL = 'http://localhost:3000/api/teddies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Stockage de la réponse à la requête dans produits
request.onload = function() {
    var produits = request.response;
    console.log(produits)

// récupérer l'Id de l'url
let params = new URLSearchParams(document.location.search);
let ID = params.get("id") // est le nombre après l'ID
console.log(ID);

// Afficher le produit
const ficheProduit = document.getElementById('produit');


// Boucle pour afficher chaque élément du tableau
for (let i in produits) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('listeOurs');

    if (ID == produits[i]._id) {


    // Afficher l'image du produit
    let imageDivProduit = document.createElement('div');
    imageDivProduit.classList.add('produit_img')
    let productImage = document.createElement('img');
    productImage.classList.add('liste_ours_img');
    productImage.src = produits[i].imageUrl;
   

//structure Div
    
    ficheProduit.append(imageDivProduit);
    imageDivProduit.append(productImage)
}
     

}
}