/*
    Classe Product
    représente un produit du catalogue
    donne le modèle d'un object Product
*/
class Product {
    // Déclaration des propriétés de Produit
    reference;      // type : string
    name;           // type : string
    description;    // type : string
    imgPath;        // type : string
    price;          // type : number

    constructor(reference, name) {
        this.reference = reference;
        this.name = name;
    }

    // Méthodes pour mettre à jour les valeurs des propriétés
    setDescription(description) {
        this.description = description;
        return this;
    }

    setImgPath(imgPath) {
        this.imgPath = imgPath;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }
}