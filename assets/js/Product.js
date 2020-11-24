class Product {
    reference;
    name;
    description;
    imgPath;
    price;

    constructor(reference, name) {
        this.reference = reference;
        this.name = name;
    }

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