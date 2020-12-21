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
let ours1 = new Ours('teddy1', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours2 = new Ours('teddy2', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours3 = new Ours('teddy3', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours4 = new Ours('teddy4', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');


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
    let imageOurs = document.createElement('div');
    imageOurs.classList.add('ours1_img');
    imageOurs.src = `${listeOurs.imageUrl}`;

    // Afficher le nom
    let productRightDiv = document.createElement('div');
    let productName = document.createElement('p');
    productRightDiv.classList.add('ours1_desc');
    productName.innerText = `${listeOurs.name}`;



    
    productOurs.append(imageOurs, productName);

};


