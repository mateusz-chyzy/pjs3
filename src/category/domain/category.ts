export class Category {
    id: string;
    name:string;

    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    static toJson(category: Category){
        return {
            id: category.id,
            name: category.name,
        }
    }
    static toManyJson(categories: Category[]){
        categories.map((product) => {
            return {
                id: product.id,
                name: product.name,
            }
        });
        return categories;
    }
}