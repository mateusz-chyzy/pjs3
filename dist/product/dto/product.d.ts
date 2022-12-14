export declare class Product {
    id: string;
    name: string;
    price: number;
    constructor(id: any, name: any, price: any);
    static toJson(product: Product): {
        id: string;
        name: string;
        price: number;
    };
    static toManyJson(products: Product[]): Product[];
}
