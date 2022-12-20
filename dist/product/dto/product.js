"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, img, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.category = category;
    }
    static toJson(product) {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            category: product.category
        };
    }
    static toManyJson(products) {
        products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                category: product.category
            };
        });
        return products;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map