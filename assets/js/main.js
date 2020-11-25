// Initialisation du catalogue des produits
let catalog = new Catalog();

let data = [
    ['G001', 'Ovation Celebrity', 'CE48P-TGE Elite Plus', 'assets/img/guit.jpg', 498],
    ['G002', 'Harley Benton Custom Line', 'CLJ-412E NT', 'assets/img/guit.jpg', 248],
    ['G003', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['G004', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K001', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K002', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K003', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['K004', 'Guitare Cort', 'Guitare OK', 'assets/img/imgg.jpg', 2000],
    ['B001', 'Thomann Trumpet', 'ETR-3300S Eb/D', 'assets/img/trompette.png', 999],
    ['B002', 'Arnolds & Sons Tuba', 'Tuba 25', 'assets/img/Tuba.png', 39],
    ['B003', 'Startone Sax', 'SAS-75 Alto Sax', 'assets/img/saxophone alto.png', 244],
    ['B004', 'Startone Sax', 'STS-75 Tenor Sax', 'assets/img/Saxophone tenor.png', 2000],
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