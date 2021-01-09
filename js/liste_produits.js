// Chargement du JSON
var requestURL = 'http://localhost:3000/api/teddies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Stockage de la réponse à la requête dans produits
request.onload = function() {
    var produits = request.response;
    console.log(produits.colors)


// Afficher le tableau
const listeVue = document.getElementById('liste');

// Boucle pour afficher chaque élément du tableau
for (let i in produits) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('listeOurs');


    // Afficher l'image
    let imageDivOurs = document.createElement('div');
    let productImage = document.createElement('img');
    productImage.classList.add('liste_ours_img');
    productImage.src = produits[i].imageUrl;
    

    // Afficher le nom + la description
    let productRightDiv = document.createElement('div');
    productRightDiv.classList.add('liste_ours_desc');
    let productName = document.createElement('p');
    productName.classList.add('ours_name');
    let productDesc = document.createElement ('p');
    productDesc.classList.add('ours_desc')
    productName.innerText = produits[i].name;
    productDesc.innerText = produits[i].description;

    // Afficher le CTA
    let linkCTA = document.createElement('div');
    linkCTA.innerHTML = `<a href="produit.html?id=${produits[i]._id}" class="btn">Voir le produit</a>`;


    // Afficher le prix
    let productRightDivPrice = document.createElement('div');
    productRightDivPrice.classList.add('price');
    let productPrice = document.createElement('p');
    productPrice.innerText = produits[i].price / 100 + '€';
    console.log(produits)

   

//structure Div
    
    listeVue.append(productOurs);
    productOurs.append(imageDivOurs, productRightDiv, productRightDivPrice);
    imageDivOurs.append(productImage);
    productRightDiv.append(productName, productDesc, linkCTA);
    productRightDivPrice.append(productPrice);
     
}
}