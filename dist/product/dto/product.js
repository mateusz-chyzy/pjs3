"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    static toJson(product) {
        return {
            id: product.id,
            name: product.name,
            price: product.price
        };
    }
    static toManyJson(products) {
        products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price
            };
        });
        return products;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map