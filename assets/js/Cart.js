/*
    Classe Cart
    représente le panier
*/
class Cart extends Array {
    catalog;

    // Constructeur, prend en paramètre le catalogue peuplé au préalable
    constructor(catalog) {
        super();
        this.catalog = catalog;
    }

    // Rajoute un produit au panier
    addProduct(reference, quantity) {
        // Si la référence existe déjà dans le panier, on augmente juste la quantité
        for (let i = 0; i < this.length; i++) {
            if (this[i].reference == reference) {
                this.addItem(i);
                return;
            }
        }
        // Sinon on rajoute le produit
        this.push({"reference": reference, "quantity": quantity});
    }

    // Retire un produit de la commande
    removeProduct(index) {
        this.splice(index, 1);
        this.updateOrderList();
    }

    // Appelé pour rajouter 1 produit
    addItem(itemIndex) {
        this[itemIndex].quantity++;
        this.updateOrderList();
    }

    // Appelé pour retire 1 produit
    removeItem(itemIndex) {
        this[itemIndex].quantity--;
        this.updateOrderList();
    }

    // Mise à jour dynamique de la liste de commande
    updateOrderList() {
        // Récupération du <tbody> contenant la liste des achats
        let orderLine = document.getElementById('order-list');
        orderLine.innerHTML = '';

        // Récupération des éléments affichant les totaux
        let totalOrder = document.getElementById('order-list-total');
        let totalDisplay = document.getElementById('cart-total');
        let total = 0;

        // Remplissage de la liste de commande
        for (let currentProduct = 0; currentProduct < this.length; currentProduct++) {
            // Récupération des infos pour le produit en cours
            let orderItem = catalog.getProduct(this[currentProduct].reference);

            // Création des éléments pour une ligne du tableau
            let description = document.createElement('div');
            let price = document.createElement('div');
            let quantity = document.createElement('div');
            let addItemBtn = document.createElement('button');
            let removeItemBtn = document.createElement('button');
            let subTotal = document.createElement('div');
            let removeBtnCol = document.createElement('div');
            let removeBtn = document.createElement('button');

            // Ajout des classes Bootstrap aux éléments créés
            description.classList.add('col-12', 'col-lg-5');
            price.classList.add('col-3 col-lg-2');
            price.classList.add('col-3 col-lg-2');
            price.classList.add('col-3 col-lg-2');
            price.classList.add('col-3 col-lg-1');

            // Remplissage des éléments
            description.textContent = orderItem.description;
            price.textContent = orderItem.price + ' €';
            subTotal.textContent = this[currentProduct].quantity * orderItem.price + ' €';
            total += this[currentProduct].quantity * orderItem.price;
            // Création des boutons pour augmenter/diminuer la quantité
            let quantityText = document.createTextNode(' ' + this[currentProduct].quantity + ' ');
            removeItemBtn.addEventListener('click', () => this.removeItem(currentProduct));
            removeItemBtn.classList.add('btn', 'btn-primary', 'btn-sm');
            removeItemBtn.textContent = '-';
            addItemBtn.addEventListener('click', () => this.addItem(currentProduct));
            addItemBtn.classList.add('btn', 'btn-primary', 'btn-sm');
            addItemBtn.textContent = '+';
            quantity.appendChild(removeItemBtn);
            quantity.appendChild(quantityText);
            quantity.appendChild(addItemBtn);
            
            // Création du bouton pour retirer le produit
            removeBtn.addEventListener('click', () => this.removeProduct(currentProduct));
            removeBtn.classList.add('btn', 'btn-primary');
            removeBtn.textContent = '×';
            removeBtnCol.appendChild(removeBtn);

            // Ajout des éléments à la ligne
            orderLine.appendChild(description);
            orderLine.appendChild(price);
            orderLine.appendChild(quantity);
            orderLine.appendChild(subTotal);
            orderLine.appendChild(removeBtnCol);
        }

        // Si panier vide : afficher un message
        if (!this.length) {
            let orderLine = document.createElement('tr');
            let emptyCartNotice = document.createElement('td');
            emptyCartNotice.setAttribute('colspan', '4');
            emptyCartNotice.classList.add('text-center');
            emptyCartNotice.textContent = 'Votre panier est vide.';
            orderLine.appendChild(emptyCartNotice);
            orderList.appendChild(orderLine);
        }

        // Mise à jour du total de la mcommande
        totalOrder.textContent = total + ' €';
        totalDisplay.textContent = total + ' €';
    }
}