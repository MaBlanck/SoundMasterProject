// Initialisation du catalogue des produits
let catalog = new Catalog();

let data = [
    ['G001', 'Ovation Celebrity', 'CE48P-TGE Elite Plus', 'assets/img/guit.jpg', 498],
    ['G002', 'Harley Benton Custom Line', 'CLJ-412E NT', 'assets/img/guit.jpg', 248],
    ['G003', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G004', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['B002', 'Thomann Trumpet', 'ETR-3300S Eb/D', 'assets/img/trompette.png', 999],
    ['B002', 'Arnolds & Sons Tuba', 'Tuba 25', 'assets/img/Tuba.png', 39],
    ['B002', 'Startone Sax', 'SAS-75 Alto Sax', 'assets/img/saxophone alto.png', 244],
    ['B002', 'Startone Sax', 'STS-75 Tenor Sax', 'assets/img/Saxophone tenor.png', 2000],
    ['D002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['D002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['D002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['D003', 'Guitare Squier', 'Premier prix', 'assets/img/imgc.jpg', 500]
];

data.forEach(element => {
    let currentProduct = new Product(element[0], element[1]);
    currentProduct.setDescription(element[2]).setImgPath(element[3]).setPrice(element[4]);
    catalog.addProduct(currentProduct);
});