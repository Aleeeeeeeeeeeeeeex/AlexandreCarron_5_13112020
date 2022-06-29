
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
                }else{
                    reject(recupHttp);
                }
            }
        }
    })
}



promiseGet()
.then (function(response){
console.log(response.colors)
// Afficher le produit
const ficheProduit = document.getElementById('produit');

 // Afficher l'image du produit
 let imageDivProduit = document.createElement('div');
 imageDivProduit.classList.add('div_produit_img')
 let productImage = document.createElement('img');
 productImage.classList.add('produit_img');
 productImage.src = response.imageUrl;


 // Afficher le nom + la description
 let productRightDiv = document.createElement('div');
 productRightDiv.classList.add('liste_ours_desc');
 let productName = document.createElement('p');
 productName.classList.add('ours_name');
 let productDesc = document.createElement ('p');
 productDesc.classList.add('ours_desc')
 productName.innerText = response.name;
 productDesc.innerText = response.description;


 // Afficher le prix
 let productRightDivPrice = document.createElement('div');
 productRightDivPrice.classList.add('price');
 let productPrice = document.createElement('p');
 productPrice.innerText = response.price / 100 + '€';

 //Afficher les options
 let option = document.createElement('div');
 let numberOfColors = response.colors.length;
 console.log(numberOfColors)
 
 //Afficher le bon nombre de couleurs 
if (numberOfColors == 3){
 option.innerHTML = `<label for="pet-select">Couleurs</label> <select name="pets" id="pet-select"> <option value="">--Selectionnez une couleur--</option> <option value="dog">${response.colors[0]}</option><option value="cat">${response.colors[1]}</option><option value="cat">${response.colors[2]}</option></select>`
}
 if (numberOfColors == 1)  {
option.innerHTML = `<label for="pet-select">Couleurs</label> <select name="pets" id="pet-select"> <option value="">--Selectionnez une couleur--</option> <option value="dog">${response.colors[0]}</option></select>`
}

 // Afficher le CTA
 let linkCTA = document.createElement('div');
 linkCTA.classList.add('btn_fiche_produit')
 linkCTA.innerHTML = `<a href="produit.html?id=${response._id}" class="btn btn_fiche_produit">Ajouter au panier</a>`;


 //structure Div
    
 ficheProduit.append(imageDivProduit, productRightDiv, productRightDivPrice);
 imageDivProduit.append(productImage);
 productRightDiv.append(productName, productDesc, option, linkCTA)
 productRightDivPrice.append(productPrice)


 localStorage.setItem("produit", response);
 console.log(localStorage)


});














   


    
   



     



