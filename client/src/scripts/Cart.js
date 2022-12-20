export class Cart {
    constructor(items=[], categories=[]){
        this.items = items;
        this.categories = categories;
    }
    getItems() { return this.items };
    getCategories() { return this.categories };

    setItems(e) { this.items = e };
    setCategories(e) { this.categories = e };

}