class Cart extends Array {
    addProduct(reference, quantity) {
        this.push([reference, quantity]);
        let orderList = document.getElementById('orderList');
    }
}