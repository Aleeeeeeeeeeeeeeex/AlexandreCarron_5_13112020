class Ours {
    constructor (name, price, description, imageURL){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }
}

let ours1 = new Ours('teddy1', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours2 = new Ours('teddy2', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours3 = new Ours('teddy3', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');
let ours4 = new Ours('teddy4', 45, true, 'https://alex2020git.github.io/AlexandreCarron_5_13112020/images/teddy_2.jpg');


let listeOurs = [];
episodes.push(ours1, ours2, ours3, ours4);

const listeVue = document.getElementById('liste');

for (let i in listeOurs) {
    let productOurs = document.createElement('div');
    productOurs.classList.add('ours1');
    let imageOurs = document.createElement('div');
    imageOurs.classList.add('ours1_img');
    productOurs.append(imageOurs);

};


