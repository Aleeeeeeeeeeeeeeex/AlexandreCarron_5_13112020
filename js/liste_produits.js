var requestURL = 'http://localhost:3000/api/teddies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
    var produits = request.response;


// Afficher le tableau
const listeVue = document.getElementById('liste');

// Boucle pour afficher chaque élément du tableau
for (let i in produits) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('listeOurs');
    console.log(produits)

    // Afficher l'image
    let imageDivOurs = document.createElement('div');
    let productImage = document.createElement('img');
    productImage.classList.add('liste_ours_img');
    productImage.src = produits[i].imageURL;
    
    

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
    let productCTA = document.createElement('div');
    productCTA.classList.add('btn');
    productCTA.innerText = `Ajouter au panier`;

    // Afficher le prix
    let productRightDivPrice = document.createElement('div');
    productRightDivPrice.classList.add('price');
    let productPrice = document.createElement('p');
    productPrice.innerText = produits[i].price + '€';

//structure Div
listeVue.append(productOurs);
    productOurs.append(imageDivOurs, productRightDiv, productRightDivPrice);
    imageDivOurs.append(productImage);
    productRightDiv.append(productName, productDesc, productCTA);
    productRightDivPrice.append(productPrice);
     
}
}