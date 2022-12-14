"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static toJson(category) {
        return {
            id: category.id,
            name: category.name,
        };
    }
    static toManyJson(categories) {
        categories.map((product) => {
            return {
                id: product.id,
                name: product.name,
            };
        });
        return categories;
    }
}
exports.Category = Category;
//# sourceMappingURL=category.js.map