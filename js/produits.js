
// récupérer l'Id de l'url
let params = new URLSearchParams(document.location.search);
let ID = params.get("id") // est le nombre après l'ID
console.log(ID);

// Chargement du JSON
function promiseGet() {
    return new Promise((resolve, reject) => {
        let recupHttp = new XMLHttpRequest();
        recupHttp.open('GET', `http://localhost:3000/api/teddies/${ID}`);
        recupHttp.send();
        recupHttp.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE) {
                if(this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    console.log(resolve)
                }else{
                    reject(recupHttp);
                }
            }
        }
    })
}

.then(function(response) {
    console.log ('test')
}


// Stockage de la réponse à la requête dans produits
request.onload = function() {
    var produits = request.response;
    console.log(produits)



// Afficher le produit
const ficheProduit = document.getElementById('produit');


// Boucle pour afficher chaque élément du tableau
for (let i in produits) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('listeOurs');

    if (ID == produits[i]._id) {


    // Afficher l'image du produit
    let imageDivProduit = document.createElement('div');
    imageDivProduit.classList.add('div_produit_img')
    let productImage = document.createElement('img');
    productImage.classList.add('produit_img');
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


    // Afficher le prix
    let productRightDivPrice = document.createElement('div');
    productRightDivPrice.classList.add('price');
    let productPrice = document.createElement('p');
    productPrice.innerText = produits[i].price / 100 + '€';
    console.log(produits)

    // Afficher le CTA
    let linkCTA = document.createElement('div');
    linkCTA.classList.add('btn_fiche_produit')
    linkCTA.innerHTML = `<a href="produit.html?id=${produits[i]._id}" class="btn btn_fiche_produit">Ajouter au panier</a>`;
   

//structure Div
    
    ficheProduit.append(imageDivProduit, productRightDiv, productRightDivPrice);
    imageDivProduit.append(productImage);
    productRightDiv.append(productName, productDesc, linkCTA)
    productRightDivPrice.append(productPrice)
}
     

}
}
