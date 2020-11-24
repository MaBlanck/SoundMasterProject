class Catalog extends Array {
    addProduct(product) {
        this.push(product);
    }

    getProduct(reference) {
        for (let element of this) {
            if (element.reference == reference) {
                return element;
            }
        }
    }
}