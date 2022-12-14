import { PrismaService } from "../prisma/prisma.service";
import { Product } from "./dto/product";
import { ProductDTO } from "./dto/product.dto";
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllProducts(): Promise<Product[]>;
    getProductById(productId: string): Promise<Product>;
    updateProductById(productId: string, data: ProductDTO): Promise<Product>;
    createProduct(data: ProductDTO): Promise<Product>;
    deleteProduct(productId: string): Promise<Product>;
}
