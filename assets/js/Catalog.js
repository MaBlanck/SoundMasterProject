/*
    Classe Catalog
    représente le catalogue des produits
*/
class Catalog extends Array {
    // Rajoute un produit au catalogue
    addProduct(product) {
        this.push(product);
    }

    // Retourne l'objet correspondant à la référence dans le catalogue
    getProduct(reference) {
        for (let element of this) {
            if (element.reference == reference) {
                return element;
            }
        }
    }
}