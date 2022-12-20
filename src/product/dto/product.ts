export class Product {
    id: string;
    name:string;
    price: number;
    img: string;
    category: string;

    constructor(id,name,price,img,category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.category = category;
    }
    static toJson(product: Product){
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            category: product.category
        }
    }
   static toManyJson(products: Product[]){
        products.map((product) => {
         return {
             id: product.id,
             name: product.name,
             price: product.price,
             img: product.img,
             category: product.category
         }
        });
        return products;
    }
}