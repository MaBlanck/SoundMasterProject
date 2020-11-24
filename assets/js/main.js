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