import { ProductService } from "./product.service";
import { Product } from "./dto/product";
import { ProductID } from "./persistence/product.param";
import { ProductDTO } from "./dto/product.dto";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    getProduct(params: ProductID): Promise<Product>;
    updateProduct(params: ProductID, updated: ProductDTO): Promise<Product>;
    createProduct(updated: ProductDTO): Promise<Product>;
    deleteProduct(params: ProductID): Promise<Product>;
}
