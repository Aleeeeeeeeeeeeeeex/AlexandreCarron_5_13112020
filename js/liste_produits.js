// Création de l'objet Ours

class Ours {
    constructor (name, price, description, imageURL){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }
}

// Création de nouvelles instances
let ours1 = new Ours('teddy1', 45, 'description1', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_3.jpg');
let ours2 = new Ours('teddy2', 40, 'decription2', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_3.jpg');
let ours3 = new Ours('teddy3', 37, 'description3', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_4.jpg');
let ours4 = new Ours('teddy4', 30, 'description4', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_5.jpg');


// Création du tableau
let listeOurs = [];
listeOurs.push(ours1, ours2, ours3, ours4);
let numberOfOurs = listeOurs.length;



// Afficher le tableau
const listeVue = document.getElementById('liste');

// Boucle pour afficher chaque élément du tableau
for (let i in listeOurs) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('ours1');

    // Afficher l'image
    let imageDivOurs = document.createElement('div');
    let productImage = document.createElement('img');
    console.log(listeOurs[i].imageUrl);
    

    // Afficher le nom + la description
    let productRightDiv = document.createElement('div');
    productRightDiv.classList.add('ours1_desc');
    let productName = document.createElement('p');
    let productDesc = document.createElement ('p');
    productName.innerText = `${listeOurs[i].name}`;
    productDesc.innerText = `${listeOurs[i].description}`;

    // Afficher le prix
    let productRightDivPrice = document.createElement('div');
    productRightDivPrice.classList.add('price');
    let productPrice = document.createElement('p');
    productPrice.innerText = `${listeOurs[i].price}` + '€';

    //structure Div
    listeVue.append(productOurs);
    productOurs.append(imageDivOurs, productRightDiv, productRightDivPrice);
    imageDivOurs.append(productImage);
    productRightDiv.append(productName, productDesc);
    productRightDivPrice.append(productPrice);

};


