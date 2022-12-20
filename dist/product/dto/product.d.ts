export declare class Product {
    id: string;
    name: string;
    price: number;
    img: string;
    category: string;
    constructor(id: any, name: any, price: any, img: any, category: any);
    static toJson(product: Product): {
        id: string;
        name: string;
        price: number;
        img: string;
        category: string;
    };
    static toManyJson(products: Product[]): Product[];
}
