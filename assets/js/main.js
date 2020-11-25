// Initialisation du catalogue des produits
let catalog = new Catalog();

let data = [
    ['G001', 'Ovation Celebrity', 'CE48P-TGE Elite Plus', 'assets/img/guit.jpg', 498],
    ['G002', 'Harley Benton Custom Line', 'CLJ-412E NT', 'assets/img/guitar.jpg', 248],
    ['G003', 'Gibson SG', 'Standard ´64 Maestro CH VOS', 'assets/img/guitElec.jpg', 545],
    ['G004', 'Gibson SG', 'Standard ´64 Maestro CH VOS', 'assets/img/Guitelec2.jpg', 1379],
    ['K001', 'KAWAI GL 10', 'E/P Grand Piano', 'assets/img/piano.jpg', 9799],
    ['K002', 'Thomann DP-95', 'B Arranger Set', 'assets/img/piano2.jpg', 599],
    ['K003', 'Novation 61SL', 'MKIII', 'assets/img/clavier.jpg', 599],
    ['K004', 'Swissonic', 'EasyKey 61', 'assets/img/clavier2.jpg', 99],
    ['B001', 'Thomann Trumpet', 'ETR-3300S Eb/D', 'assets/img/trompette.png', 999],
    ['B002', 'Arnolds & Sons Tuba', 'Tuba 25', 'assets/img/Tuba.png', 39],
    ['B003', 'Startone Sax', 'SAS-75 Alto Sax', 'assets/img/saxophone alto.png', 244],
    ['B004', 'Startone Sax', 'STS-75 Tenor Sax', 'assets/img/Saxophone tenor.png', 398],
    ['D001', 'Mapex Tornado Stand.', 'Zildjian Set BK', 'assets/img/Batterie .png', 499],
    ['D002', 'Clifton Bongo Set', 'Bongos', 'assets/img/bongo.png', 19.60],
    ['D003', 'Sonor Xylophone', 'SX CB F Soprano Xylophone', 'assets/img/Xylophone soprano.png', 369],
    ['D004', 'Pearl Travel Conga', '11" Travel Conga', 'assets/img/Conga.png', 377]
];

data.forEach(element => {
    let currentProduct = new Product(element[0], element[1]);
    currentProduct.setDescription(element[2]).setImgPath(element[3]).setPrice(element[4]);
    catalog.addProduct(currentProduct);
});

// Initialisation du panier, son bouton et les boutons d'ajout
let cart = new Cart(catalog);
let cartBtn = document.getElementById('cart-button');
cartBtn.addEventListener('click', () => cart.updateOrderList());
addToCartBtns = document.querySelectorAll('button.shop');
addToCartBtns.forEach(element => element.addEventListener('click', () => cart.addProduct(element.dataset.reference, 1)));

/*
*FLECHE POUR REMONTER EN HAUT DE PAGE
*/
let returnTop = document.createElement('p');
returnTop.innerHTML = '<img src="https://img.icons8.com/windows/32/000000/long-arrow-up.png"/>';
document.body.appendChild(returnTop);
returnTop.style.position = 'fixed';
returnTop.style.color = 'black';
returnTop.style.bottom = '0';
returnTop.style.right = '0';
returnTop.style.visibility = 'hidden';
returnTop.style.transform = '';
returnTop.style.marginRight = '50px';
function scrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
};
returnTop.addEventListener('click', scrollUp);
//Animation apparition disparition de la flèche pour retour en haut de page
window.onscroll = function () {
    let y = window.scrollY;
    if (y > 600) {
        returnTop.style.visibility = 'initial';
    } else {
        returnTop.style.visibility = 'hidden';
    }
};

//FAIS APPARAITRE LA CATEGORIE SOUHAITEE AU CLIC SUR LE LIEN NAVBAR
/* let categoryList = document.getElementsByTagName('section');// 
for (const element of categoryList) {
    element.style.display = 'none';
};
let categpryListLink = document.getElementsByClassName('nav-link');
for (const element of categoryListLink) {
    element.addEventListener('click', showCategory)
} */
/*
* La fonction permet d'afficher la catégorie choisie.
*/
/* function showCategory() { */
    //categoryPosition contient la position du début de la chaine. le +1 est là car nous voulions non pas le # mais ce qui vient APRES
    /* let categoryPosition = this.href.indexOf('#') + 1;//this fait référence à ce qui a déclenché l'évènement
    let category = this.href.substring(categoryPosition);
    //on parcours la liste des catégories pour afficher que celle selectionnée
    for (const element of categoryList) {
        if (element.id == category) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none'
        }
    }
}
 */