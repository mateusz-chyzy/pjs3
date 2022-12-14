export declare class Category {
    id: string;
    name: string;
    constructor(id: any, name: any);
    static toJson(category: Category): {
        id: string;
        name: string;
    };
    static toManyJson(categories: Category[]): Category[];
}
