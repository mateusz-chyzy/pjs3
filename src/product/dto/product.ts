export class Product {
    id: string;
    name:string;
    price: number;

    constructor(id,name,price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    static toJson(product: Product){
        return {
            id: product.id,
            name: product.name,
            price: product.price
        }
    }
   static toManyJson(products: Product[]){
        products.map((product) => {
         return {
             id: product.id,
             name: product.name,
             price: product.price
         }
        });
        return products;
    }
}