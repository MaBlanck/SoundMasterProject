// Initialisation du catalogue des produits
let catalog = new Catalog();

let data = [
    ['G001', 'Guitare Fender', 'Guitare master', 'assets/img/imgf.jpg', 4500],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G003', 'Guitare Squier', 'Premier prix', 'assets/img/imgc.jpg', 500]
];

data.forEach(element => {
    let currentProduct = new Product(element[0], element[1]);
    currentProduct.setDescription(element[2]).setImgPath(element[3]).setPrice(element[4]);
    catalog.addProduct(currentProduct);
});

/*
*FLECHE POUR REMONTER EN HAUT DE PAGE
*/
let returnTop = document.createElement('p');
<<<<<<< HEAD
returnTop.innerHTML = '<img src="https://img.icons8.com/windows/32/000000/long-arrow-up.png"/>';
=======
returnTop.innerHTML = '<i class="fas fa-arrow-up fa-3x"></i>';
>>>>>>> 355bdec4ef8e0f344b5bf093d02ebae66db97523
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
