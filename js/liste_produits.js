// API Objet teddies

function promiseGet() {
    return new Promise((resolve, reject) => {
        let recupHttp = new XMLHttpRequest();
        recupHttp.open('GET', 'http://localhost:3000/api/teddies');
        recupHttp.send();
        recupHttp.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE) {
                if(this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    console.log("Administration : connection ok");
                }else{
                    reject(recupHttp);
                }
            }
        }
    })
}





// Afficher le tableau
const listeVue = document.getElementById('liste');

function displayProduct(product){
// Boucle pour afficher chaque élément du tableau
for (let i in product) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('listeOurs');

    // Afficher l'image
    let imageDivOurs = document.createElement('div');
    let productImage = document.createElement('img');
    productImage.classList.add('liste_ours_img');
    productImage.src = product[i].imageURL;
    
    

    // Afficher le nom + la description
    let productRightDiv = document.createElement('div');
    productRightDiv.classList.add('liste_ours_desc');
    let productName = document.createElement('p');
    productName.classList.add('ours_name');
    let productDesc = document.createElement ('p');
    productDesc.classList.add('ours_desc')
    productName.innerText = `${listeOurs[i].name}`;
    productDesc.innerText = `${listeOurs[i].description}`;

    // Afficher le CTA
    let productCTA = document.createElement('div');
    productCTA.classList.add('btn');
    productCTA.innerText = `Ajouter au panier`;

    // Afficher le prix
    let productRightDivPrice = document.createElement('div');
    productRightDivPrice.classList.add('price');
    let productPrice = document.createElement('p');
    productPrice.innerText = `${listeOurs[i].price}` + '€';

    //structure Div
    listeVue.append(productOurs);
    productOurs.append(imageDivOurs, productRightDiv, productRightDivPrice);
    imageDivOurs.append(productImage);
    productRightDiv.append(productName, productDesc, productCTA);
    productRightDivPrice.append(productPrice);

}};


