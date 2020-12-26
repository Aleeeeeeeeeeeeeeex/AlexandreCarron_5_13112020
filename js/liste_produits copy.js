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
                    console.log(resolve)
                }else{
                    reject(recupHttp);
                }
            }
        }
    })
}



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
let ours1 = new Ours('teddy', 45, 'Le plus adorable que vous nayez jamais vu de la marque Nicotoy, pour dénorme câlins.', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours2 = new Ours('Woody', 40, 'Le plus adorable que vous nayez jamais vu de la marque Nicotoy, pour dénorme câlins.', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_3.jpg');
let ours3 = new Ours('Winnie', 37, 'Le plus adorable que vous nayez jamais vu de la marque Nicotoy, pour dénorme câlins.', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_4.jpg');
let ours4 = new Ours('Baloo', 30, 'Le plus adorable que vous nayez jamais vu de la marque Nicotoy, pour dénorme câlins.', 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_1.jpg');


// Création du tableau
let listeOurs = [];
listeOurs.push(ours1, ours2, ours3, ours4);
let numberOfOurs = listeOurs.length;



// Afficher le tableau
const listeVue = document.getElementById('liste');

// Boucle pour afficher chaque élément du tableau
for (let i in listeOurs) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('listeOurs');

    // Afficher l'image
    let imageDivOurs = document.createElement('div');
    let productImage = document.createElement('img');
    productImage.classList.add('liste_ours_img');
    productImage.src = listeOurs[i].imageURL;
    
    

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

};


